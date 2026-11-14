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

The overhaul lives on rehaul/interactive-portfolio. Its starting point is origin/main at a74d0fe3beecce8d6192681a09c7b0b80a6105ff. Existing assets and the original portfolio are retained. This local preview has not been pushed or deployed as part of the overhaul.

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
