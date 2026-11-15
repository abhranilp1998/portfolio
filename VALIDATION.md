# Local validation — 14 November 2026

## Automated

- node --test tests/portfolio.test.mjs: four tests passed, covering combined platform/search filtering, true empty results, email-draft encoding and the six case-study/source/asset relationships.
- Staged whitespace check passed for the new site and documentation. The byte-preserved archive retains whitespace already present in the original source and is excluded from that check.
- Structural HTTP check: all 10 current pages and 169 local links/assets, including fragment destinations, passed against the running preview.

## In-app browser

- Web/Mobile/Desktop preview switching updates the featured project and case-study destination.
- Recruiter/client control updates the copy and relevant next action.
- Theme changes survive page navigation.
- Mobile plus Flutter filtering returns the three Flutter mobile projects. An unmatched search shows the empty state; reset restores all six and focuses search.
- GitCompass image dialog opens and closes with Escape, returning focus to its trigger.
- Contact enquiry routes update context labels. A synthetic visitor message was copied successfully. No email was sent and no external form was submitted.
- Mobile menu toggles aria-expanded, closes with Escape and navigates correctly.
- Home checked at 360, 768 and 1440 pixels without horizontal overflow; mobile contact layout visually inspected.
- No runtime console errors or broken sourced images were found in the inspected preview.

## Limits

This is a local functionality and responsive-layout check, not an accessibility certification, broad device matrix, third-party integration audit or production deployment check. Mailto delivery depends on the visitor's email application. External project links and screenshots describe the inspected sources and maturity; the underlying applications were not exhaustively retested here.

## Expanded portfolio — 15 November 2026

- Existing checkpoint confirmed: 5a68abd, clean rehaul/interactive-portfolio branch before edits.
- All 16 current pages and 370 local references passed HTTP/file/fragment checks.
- All four focused Node tests passed after imagery and launch-link changes; app.mjs and expansion.mjs passed Node syntax checks.
- Project platform/search filtering still returns three Flutter mobile projects with external launch links. Spendly image loaded successfully in the mobile work page.
- The CV includes four career entries and all three education entries, five original skill self-assessments and 19 original tool tags. The text CV is downloadable; PDF uses the browser print dialog and print stylesheet, not a pre-generated certified PDF.
- A synthetic testimonial was saved locally, survived reload, and was deleted through the UI. No feedback was emailed or published.
- Map introduction dialog, valid-name unlock, iframe loading and re-lock were exercised. The map uses OpenStreetMap, without the old embedded key. Map gate is a local interaction rather than authentication.
- Code Scan and Crossfade options previewed in the UI; Code Scan selection persisted while navigating to the CV. Terminal is restored as the handoff default. Reduced-motion handling is present in CSS/JavaScript; system preference was not changed during QA.
- Mobile CV, Skills, Work and Lab checked at 390px with no horizontal overflow. Shared mobile menu navigation exercised. Additional desktop and default-size visual checks were performed.
- Spendly is a source-rendered dashboard image using test sample data. The app renderer surfaced a two-pixel overflow in the underlying app; no claim is made that that app's layout tests pass. It was not modified or pushed as part of this portfolio task.
- No deployment or remote push was performed. Third-party release pages can be empty if a project has not published binaries.

## Developer identity revision

- 20 current pages and all local asset/link/fragment references checked against the updated port 5601 preview.
- GET /api/posts returns an explicit empty placeholder response with publishingEnabled:false. POST /api/posts returns 501 backend_not_configured. No real publishing backend is connected.
- Original data and archive retained; four existing focused Node tests pass.
- New blog search reduced six topics to one for SQL; local writing draft saved, survived reload, and cleared through the UI. Plain-text preview uses textContent. No post was published or emailed.
- Show contacts expanded to the original email, phone, city and birthday. Clients page has six labelled placeholders.
- Mobile home/blog navigation checked at 390px without horizontal overflow; desktop layout and both color themes inspected. Uppercase AP branding and SVG favicon confirmed in markup.
- Browser print/PDF and real backend authentication/storage remain outside these local UI checks.

## Three independent worlds and contact refinement

- Corrected scope follows the latest explicit clarification: keep navigation and add a separate Get into my world chooser for the three UIs.
- 24 current pages and 740 local references passed local HTTP/file/fragment checks.
- Six Node tests pass, including reduced-motion disclosure behavior and rapid reverse/cancel handling.
- Terminal projects command showed all six projects. Unknown commands produced explanatory text; no shell command is executed.
- Quiet Engineer's résumé showed seven career/education entries and the existing CV download.
- Desktop project minimize/restore, terminal close/restore and navigation recovery of a minimized workspace were exercised.
- All three worlds checked at 390px and 320px without horizontal overflow or broken sourced images. Mobile Animation Lab shortcut opened the preserved lab; all three transition controls remained present.
- Main navigation remained intact at desktop width, including the additional world button and visible lab link. Contact rapid reversals finished open with synchronized labels; normal collapse was observed animating before closing.
- Concept references and post-fix screenshots were reviewed together; see design-qa.md for intentional deviations and remaining P3 polish.
- No push, deployment or change to the production portfolio was made.
