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
