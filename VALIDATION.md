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
