CREATE TABLE links (
    id INTEGER PRIMARY KEY,
    position INTEGER NOT NULL,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT
);

INSERT INTO links (position, title, url, icon) VALUES
    (1, 'Past Tests Repository', '/repo', NULL),
    (2, 'Winter ''27 Intraμrals Interest Form', 'https://forms.gle/NHzqEdqA4wvFLNEP8', NULL),
    (3, 'Colloquium Speaker Sign-up (Fall 2026)', 'https://docs.google.com/forms/d/e/1FAIpQLSdyK3wdz5gFFMt1VX9YxFe2CaBEvGds_Pa5kY4WaA67LZ73FA/viewform', NULL),
    (4, 'μ(t) Merch', 'https://muoft.square.site', NULL),
    (5, 'Constitution', 'https://ugc.production.linktr.ee/fbea013d-589a-41ea-a6ef-3de59986409b_-t--Constitution-Final-Revision-2026-27.pdf', NULL),
    (6, 'Photos on Flickr', 'https://www.flickr.com/photos/203710933@N04', NULL),
    (7, 'About Us', '/about/about-us', NULL),
    (8, 'Instagram', 'https://instagram.com/uoftmathunion', 'instagram'),
    (9, 'Discord', 'https://discord.gg/HVG3b4dm53', 'discord'),
    (10, 'YouTube', 'https://www.youtube.com/@uoftmu', 'youtube'),
    (11, 'Email', 'mailto:mu@math.toronto.edu', 'envelope');
