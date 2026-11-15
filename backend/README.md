# Future publishing backend

The public blog currently reads assets/content/posts.json. config.json explicitly selects static mode and publishingEnabled:false. The Writing Studio is a browser-local drafting and JSON export tool, not an authenticated CMS. GitHub Pages can serve the static mode; it cannot execute API routes.

The local Node server exposes GET /api/posts with an empty posts array and an explicit placeholder mode. Mutating API routes return 501 backend_not_configured. No secrets, fake authentication or public write access are included.

## Contract to implement

GET /api/posts: published posts only, cursor pagination, optional category and query. GET /api/posts/:slug: published article or 404. Authenticated editor POST/PATCH /api/posts: validated title, unique slug, category, excerpt and plain-text or sanitized Markdown body; drafts private. Publish/unpublish is an explicit authenticated action. Add CSRF protection for cookie sessions, input limits, audit timestamps and moderation. Uploaded media requires controlled storage and validated types.

Testimonials: POST /api/testimonials goes into pending review; never publish visitor input directly. Clients: approved records only, with consent for logos and names. No client relationships are inferred from placeholder logos.

Use schema.sql as the initial model. Connect a real database, identity provider and hosting runtime before enabling publication. Do not place credentials in browser config.
