#!/usr/bin/env python3
"""One-off: move the old filename-encoded repo into D1 and make first-page previews.

usage: python3 scripts/backfill.py keys.txt OUTDIR
  keys.txt: one R2 key per line (the old /api/repo `file` values)
writes OUTDIR/pdf/*, OUTDIR/previews/<key>.jpg, OUTDIR/seed.sql, OUTDIR/put-previews.sh
needs pdftoppm (poppler). Then:
  npx wrangler d1 execute muoft [--local|--remote] --file OUTDIR/seed.sql
  sh OUTDIR/put-previews.sh [--local|--remote]
"""
import os, re, shlex, subprocess, sys, urllib.parse, urllib.request

SITE = 'https://muoft.ca/api/repo/'


def parse(key):
    # old scheme: COURSE-YEAR-Name_With_Underscores-tag1_tag2.pdf (year may be "undefined")
    parts = os.path.basename(key).removesuffix('.pdf').split('-')
    course, year, name, tags = (parts + ['', '', '', ''])[:4]
    return course.upper(), int(year) if year.isdigit() else None, name.replace('_', ' ').strip(), 'solutions' in tags.split('_')


def q(v):
    return 'NULL' if v is None else str(v) if isinstance(v, int) else "'" + str(v).replace("'", "''") + "'"


def main(keys_file, out):
    keys = [k.strip() for k in open(keys_file) if k.strip()]
    os.makedirs(f'{out}/pdf', exist_ok=True)
    rows, puts = [], []
    for key in keys:
        pdf = f'{out}/pdf/{key.replace("/", "__")}'
        if not os.path.exists(pdf) or open(pdf, 'rb').read(4) != b'%PDF':
            if '/' in key:  # the old [path] route can't serve keys with a slash, so read R2 directly
                subprocess.run(['npx', 'wrangler', 'r2', 'object', 'get', f'repo/{key}', '--remote', '--file', pdf], check=True, capture_output=True)
            else:
                req = urllib.request.Request(SITE + urllib.parse.quote(key), headers={'User-Agent': 'curl/8'})  # Cloudflare 403s Python's UA
                with urllib.request.urlopen(req) as r, open(pdf, 'wb') as f:
                    f.write(r.read())
            assert open(pdf, 'rb').read(4) == b'%PDF', f'{key} is not a PDF'
        preview = f'previews/{key.removesuffix(".pdf")}.jpg'
        jpg = f'{out}/{preview}'
        os.makedirs(os.path.dirname(jpg), exist_ok=True)
        if not os.path.exists(jpg):
            subprocess.run(['pdftoppm', '-f', '1', '-l', '1', '-singlefile', '-jpeg', '-jpegopt', 'quality=80',
                            '-scale-to-x', '440', '-scale-to-y', '-1', pdf, jpg.removesuffix('.jpg')], check=True)
        course, year, name, sol = parse(key)
        assert re.fullmatch(r'[A-Z]{3}\d{3}', course) and name, key
        rows.append(f'({q(key)}, {q(preview)}, {q(course)}, {q(year)}, {q(name)}, {int(sol)}, 1)')
        puts.append(f'npx wrangler r2 object put {shlex.quote("repo/" + preview)} --file {shlex.quote(jpg)} --content-type image/jpeg "$@"')
        print(key, '->', course, year, name, 'solutions' if sol else '')
    with open(f'{out}/seed.sql', 'w') as f:
        f.write('INSERT OR IGNORE INTO files (key, preview, course, year, name, solutions, approved) VALUES\n' + ',\n'.join(rows) + ';\n')
    with open(f'{out}/put-previews.sh', 'w') as f:
        f.write('set -e\n' + '\n'.join(puts) + '\n')


if __name__ == '__main__':
    assert parse('MAT137-2019-Midterm_1-solutions.pdf') == ('MAT137', 2019, 'Midterm 1', True)
    assert parse('repo/MAT135-undefined-Midterm_2-.pdf') == ('MAT135', None, 'Midterm 2', False)
    main(*sys.argv[1:])
