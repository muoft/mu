CREATE TABLE files (
    key TEXT PRIMARY KEY,          -- R2 key of the PDF
    preview TEXT,                  -- R2 key of the first-page image
    course TEXT NOT NULL,          -- e.g. MAT137
    year INTEGER,
    name TEXT NOT NULL,            -- e.g. Midterm 1
    solutions INTEGER NOT NULL DEFAULT 0,
    approved INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX files_course ON files(course, approved);
