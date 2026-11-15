# Abhranil Paul — interactive portfolio

A static portfolio for recruiters and prospective clients, built with HTML, CSS and browser JavaScript modules. No frontend framework, package installation or build step is required.

## Run locally

Requires Node.js 18 or later:

```sh
node serve.mjs
```

Open http://127.0.0.1:5600/. Set the PORT environment variable to choose another port. The server listens only on loopback and blocks dotfiles. Stop it with Ctrl+C when launched in a terminal.

## Explore

- Home: platform previews, recruiter/client paths, about and experience.
- Work: six projects with combined platform filters and technology search.
- Case studies: EDGE, GitCompass, Commute Planner, ICARUS Verse, Spendly and NO LEAN.
- Contact: hiring, project and general enquiry routes; email drafts and copy alternatives.
- Archive: the original portfolio preserved at archive/original/index.html, linked through archive.html.

The interface includes persistent dark/light themes, mobile navigation, image zoom, scroll reveals and enter/exit page transitions. Reduced-motion preferences disable the transitions and reveals. External links and modified clicks retain normal browser behavior.

Contact prepares a draft in the visitor's email application. It does not submit to a backend, send email or persist message fields. Theme and motion preferences, plus optional testimonial drafts, are saved locally. Google Fonts is optional; system font fallbacks remain available offline.

## Source and status

The overhaul lives on rehaul/interactive-portfolio. Its starting point is origin/main at a74d0fe3beecce8d6192681a09c7b0b80a6105ff. Existing assets and the original portfolio are retained. GitHub Pages publishes the main branch at https://abhranilp1998.github.io/portfolio/. The development branch is retained separately, and the original project is preserved in archive/portfolio-before-rehaul-2026-11-15.

See [PROJECT_SOURCES.md](PROJECT_SOURCES.md) for source branches, asset provenance and project maturity. Cards distinguish actual screenshots, supplied artwork, brand imagery and typographic covers. No project metrics or client outcomes were invented.

## Validation

```sh
node --test tests/portfolio.test.mjs
git diff --check
```

See [VALIDATION.md](VALIDATION.md) for the manual browser checks and their limits. The browser UI uses native modules; preview over HTTP rather than file://.

## Layout

- assets/rehaul/: styles, interactions, project data and pure utilities.
- assets/work/: project artwork and source screenshots.
- work/: individual case-study pages.
- archive/original/: the preserved pre-overhaul site.
- serve.mjs: dependency-free local preview server.
- tests/: focused Node tests.

Copyright © 2026 Abhranil Paul. Existing repository license and third-party asset ownership remain applicable.

## Expanded portfolio — 15 November 2026

The original checkpoint is 5a68abd. New pages: about.html (full source biography), skills.html (five original self-assessments and 19 tools), cv.html (exact career dates and all education, text download and print/PDF styles), testimonials.html (four original quotes plus a local draft submission POC), notes.html (original article previews), lab.html (Terminal, Code Scan and Crossfade transitions).

Project covers and names launch the hosted site or GitHub releases page. Source code and case studies have separate actions. A releases page is not a claim that a binary exists. GitHub and Facebook handles come from the original portfolio; missing social handles are visibly labelled placeholders.

The contact map loads OpenStreetMap only after an explicit local introduction gate. It is a visual interaction, not access control. Gate fields are discarded. Testimonial drafts stay in this browser, can be deleted/copied, and can be prepared as an email; there is no public submission backend. Original testimonials are retained as supplied.

The initial panel curtains have been replaced by a configurable developer-style transition system. Preferences respect reduced motion. Typography reuses the original Plus Jakarta Sans, Inter and Fira Code families.

## Personal developer identity

The latest design uses IBM Plex Sans, IBM Plex Sans Condensed and IBM Plex Mono with a light blue/slate default and a matching dark theme. The homepage is profile-first, with original avatar, expandable contacts, biography, professional focus, real project interfaces and testimonial previews. Uppercase AP branding and an original vector AP/cursor favicon replace the earlier arrow mark.

Clients has six explicit placeholders; no template logos are passed off as real clients. Blog is a searchable collection of planned topics from the original portfolio, reading from assets/content/posts.json. The writing studio supports a local draft, reload, clear, preview and JSON export. It never publishes. Content configuration can switch between static data and a future API. backend/README.md and backend/schema.sql define the intended posts/testimonials/clients model and authentication/moderation boundaries.

Current development preview: http://127.0.0.1:5601/ (PORT=5601). The older port 5600 process was left untouched when ownership was unclear. serve.mjs defaults to 5600 when PORT is unset.

## Get into my world

A separate button is added alongside the existing navigation. It opens world.html, a chooser for three independent, interactive interpretations of this same portfolio:

- worlds/terminal.html — Terminal Workspace, file tabs, optional portfolio commands and a blinking cursor.
- worlds/quiet.html — Quiet Engineer, a minimalist professional document.
- worlds/desktop.html — Desktop Workbench, tactile windows and working minimize/restore/expand controls.

All three share the existing six-project data and original profile facts. Resume content includes all four career and three education entries. They link back to the main portfolio, the chooser and Animation Lab. Commands route to portfolio sections only; they do not execute shell commands. The main portfolio's navigation is retained.

Animation Lab has a direct desktop navigation link, a compact mobile header shortcut and a home-page shortcut. Contact details now animate in both directions with interruption/reversal handling, accessible Show/Hide labels and immediate behavior under reduced motion. Native details remains the fallback without JavaScript.

Run regression checks with: node --test tests/portfolio.test.mjs tests/world.test.mjs. The source/implementation comparison and limitations are recorded in design-qa.md. Generated media and icon provenance are in WORLD-SOURCES.md.

## Where I started

The “Where I started” link opens archive/original/index.html directly. That folder now contains all 39 tracked files from the original project at a74d0fe3beecce8d6192681a09c7b0b80a6105ff, plus an archive manifest. The same complete Git history is retained through the preservation branch archive/portfolio-before-rehaul-2026-11-15. Existing project folders were not deleted.

Publishing target: https://abhranilp1998.github.io/portfolio/ (GitHub Pages). All worlds remain static; the writing studio is local-only and the real publishing backend remains disconnected.
