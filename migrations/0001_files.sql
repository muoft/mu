CREATE TABLE files (
    id INTEGER PRIMARY KEY,
    pdf TEXT NOT NULL,
    preview TEXT NOT NULL,
    course TEXT NOT NULL,
    session TEXT,
    type TEXT CHECK (type IN ('test', 'practice-test', 'exam', 'practice-exam', 'quiz')),
    number INTEGER,
    solutions BOOLEAN NOT NULL DEFAULT FALSE,
    approved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX files_course ON files(course, approved);
