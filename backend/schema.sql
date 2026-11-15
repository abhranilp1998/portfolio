-- Proposed migration; not executed or connected to the local preview.
CREATE TABLE posts (id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, title TEXT NOT NULL, category TEXT NOT NULL, excerpt TEXT NOT NULL, body TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published')), created_at TEXT NOT NULL, updated_at TEXT NOT NULL, published_at TEXT);
CREATE TABLE testimonials (id TEXT PRIMARY KEY, name TEXT NOT NULL, role TEXT, quote TEXT NOT NULL, consent INTEGER NOT NULL DEFAULT 0, status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected')), created_at TEXT NOT NULL);
CREATE TABLE clients (id TEXT PRIMARY KEY, name TEXT NOT NULL, logo_url TEXT, project_summary TEXT, approved INTEGER NOT NULL DEFAULT 0);
