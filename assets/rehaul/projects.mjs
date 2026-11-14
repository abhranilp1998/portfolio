export const projects = [
  {
    "id": "edge",
    "name": "EDGE",
    "category": "Web",
    "type": "LIVE PERFORMANCE / MARKETPLACE",
    "stack": [
      "React",
      "TypeScript",
      "Firebase"
    ],
    "status": "Prelaunch alpha",
    "image": "assets/work/edge-artist.jpg",
    "imageLabel": "Project brand imagery from the repository",
    "repo": "https://github.com/edge911-deviant/edge-gig-marketplace/tree/9112-deviant/full-website",
    "live": "https://edge-gig-marketplace.web.app/",
    "cover": "edge",
    "tagline": "A better connection between the stage and the people behind it.",
    "description": "A two-sided gig marketplace connecting artists and organisers through structured booking workflows.",
    "problem": "Booking a performance involves more than matching two profiles. Applications, availability, hiring, cancellation and accountability have to stay consistent for both sides.",
    "decisions": [
      [
        "Two roles, one booking lifecycle",
        "Separate artist and organiser journeys cover publishing gigs, applying, hiring, completion and reviews."
      ],
      [
        "Consistency at the point of hire",
        "Reciprocal Firestore transactions and matching security rules keep acceptance and gig state together."
      ],
      [
        "An explicit backend boundary",
        "Compatibility analysis sits behind an authenticated, App Check-enforced callable function rather than exposing an AI key to the browser."
      ]
    ],
    "limit": "The inspected branch is 9112-deviant/full-website at 914522b. Production authentication and callable-function deployment remain release gates in the project documentation. This is a prelaunch alpha, not a claim of production readiness.",
    "source": "https://github.com/edge911-deviant/edge-gig-marketplace/blob/9112-deviant/full-website/docs/DEV_FOCUS_STATUS.md",
    "launch": "https://edge-gig-marketplace.web.app/",
    "launchLabel": "Open live website"
  },
  {
    "id": "gitcompass",
    "name": "GitCompass",
    "category": "Desktop",
    "type": "DEVELOPER EXPERIENCE / WINDOWS",
    "stack": [
      "C#",
      ".NET 10",
      "WPF"
    ],
    "status": "Source preview",
    "image": "assets/work/gitcompass.png",
    "imageLabel": "Actual interface screenshot from project documentation",
    "repo": "https://github.com/abhranilp1998/GitCompass",
    "cover": "compass",
    "tagline": "Making Git feel less like a leap of faith.",
    "description": "A native Windows workspace that helps people understand changes, history and their next Git action.",
    "problem": "For someone learning Git, a command is only useful when they understand what it changes, where work is saved, and what can be recovered.",
    "decisions": [
      [
        "Begin with inspection",
        "New projects open read-only. Monitoring and reviewed changes are separate permission modes."
      ],
      [
        "Explain the next useful action",
        "A beginner walkthrough, history views and contextual guidance turn repository state into understandable next steps."
      ],
      [
        "Keep responsibilities distinct",
        "Domain and application layers separate deterministic advice from Git adapters, native terminals and the WPF presentation."
      ]
    ],
    "limit": "An internal portable package exists, but it is unsigned. Some current source improvements are newer than the packaged 0.1.1 release. Platform compatibility and a representative beginner pilot remain release gates.",
    "source": "https://github.com/abhranilp1998/GitCompass/blob/main/README.md",
    "launch": "https://github.com/abhranilp1998/GitCompass/releases",
    "launchLabel": "View app releases"
  },
  {
    "id": "commute",
    "name": "Commute Planner",
    "category": "Mobile",
    "type": "EVERYDAY SYSTEMS / KOLKATA",
    "stack": [
      "Flutter",
      "Dart",
      "SQLite / Drift"
    ],
    "status": "Web demo",
    "image": "assets/work/commute.png",
    "imageLabel": "Actual running-app screenshots from the repository",
    "repo": "https://github.com/abhranilp1998/kal-route",
    "live": "https://abhranilp1998.github.io/kal-route/",
    "cover": "commute",
    "tagline": "Tomorrow’s commute, a little less uncertain.",
    "description": "A Kolkata-focused planner for saved places, trips, route timelines and nightly reminders.",
    "problem": "Planning a journey is not just finding a route. It means deciding when to leave, including a buffer, and knowing whether information is real or illustrative.",
    "decisions": [
      [
        "Persistence that can evolve",
        "Drift provides a shared SQLite model, schema migrations and a path from earlier local data."
      ],
      [
        "Maps with an honest data boundary",
        "OpenStreetMap powers place selection. Google Directions supplies live routes when configured; otherwise the app labels example Kolkata routes."
      ],
      [
        "A plan that survives app restarts",
        "Saved trips, lifecycle refresh and Android background work support the planning flow beyond a single session."
      ]
    ],
    "limit": "Without a configured Maps key, routes are explicitly example data. Android background notifications and browser capabilities differ. The repository’s demo is not a promise of live transit coverage.",
    "source": "https://github.com/abhranilp1998/kal-route/blob/main/README.md",
    "launch": "https://abhranilp1998.github.io/kal-route/",
    "launchLabel": "Open live website"
  },
  {
    "id": "icarus",
    "name": "ICARUS Verse",
    "category": "Web",
    "type": "ARTIST IDENTITY / INDEPENDENT MUSIC",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "status": "Live alpha",
    "image": "assets/work/icarus.png",
    "imageLabel": "Artist illustration supplied for the ICARUS project",
    "repo": "https://github.com/abhranilp1998/Element/tree/codex/icarus-redesign",
    "live": "https://abhranilp1998.github.io/Element/",
    "cover": "icarus",
    "tagline": "An independent artist. An identity with room to grow.",
    "description": "An artist site bringing real music, illustration, live moments and direct platform choices together.",
    "problem": "Several experiments and external links made it difficult to find the artist, start listening, or choose a meaningful next step.",
    "decisions": [
      [
        "Keep the artist’s world intact",
        "A supplied illustration, original performance photos and source-backed biography anchor the identity."
      ],
      [
        "Put listening where visitors expect it",
        "A dedicated room surfaces SoundCloud embeds, playback coordination and clear archive fallbacks."
      ],
      [
        "Replace detours with direct choices",
        "An on-site links hub exposes release-specific services; distinct contact routes lead to email drafts."
      ]
    ],
    "limit": "SoundCloud availability and service access are external dependencies. Contact uses the visitor’s email app. Earlier pages remain accessible through a dedicated archive.",
    "source": "https://github.com/abhranilp1998/Element/blob/codex/icarus-redesign/ARTIST_SOURCES.md",
    "launch": "https://abhranilp1998.github.io/Element/",
    "launchLabel": "Open live website"
  },
  {
    "id": "spendly",
    "name": "Spendly",
    "category": "Mobile",
    "type": "MOTION DESIGN / FLUTTER STARTER",
    "stack": [
      "Flutter",
      "Dart",
      "CustomPainter"
    ],
    "status": "Starter prototype",
    "cover": "spendly",
    "tagline": "Useful motion, down to the last little interaction.",
    "description": "An animated expense-tracker starter exploring connected screens, themes and transaction interactions.",
    "problem": "Animation can either help people follow changing information or distract them. This starter explores how motion can carry context across a financial interface.",
    "decisions": [
      [
        "Use the native toolkit",
        "AnimationController, Tween, Hero and CustomPainter provide the visual language without third-party animation packages."
      ],
      [
        "Connect the interactions",
        "The repository includes transaction detail, add-expense, filtering, chart interaction and theme transitions."
      ],
      [
        "Be clear about the prototype",
        "Sample INR data stays in memory. The work demonstrates interface behavior, not a production financial service."
      ]
    ],
    "limit": "This is an in-memory Flutter starter with sample data and no backend. The dashboard image was rendered from its Flutter source in a test environment. The releases page is separate from the source repository; it may not yet contain a downloadable build.",
    "source": "https://github.com/abhranilp1998/expense_tracker/blob/main/README.md",
    "repo": "https://github.com/abhranilp1998/expense_tracker",
    "launch": "https://github.com/abhranilp1998/expense_tracker/releases",
    "launchLabel": "View app releases",
    "image": "assets/work/spendly.png",
    "imageLabel": "Actual Spendly dashboard rendered from Flutter source with sample data"
  },
  {
    "id": "nolean",
    "name": "NO LEAN",
    "category": "Mobile",
    "type": "OFFLINE-FIRST / ANDROID",
    "stack": [
      "Flutter",
      "Android",
      "Local storage"
    ],
    "status": "Android MVP",
    "cover": "nolean",
    "tagline": "Designing for moments when an app needs to be steady.",
    "description": "An offline-first recovery-tracking MVP with local history, interventions and Android integrations.",
    "problem": "A sensitive tracking product needs clear controls, local persistence and predictable escape paths—not simply a dashboard of numbers.",
    "decisions": [
      [
        "A local-first core",
        "Tracking, history, backup and export are designed around local records."
      ],
      [
        "Focused intervention flows",
        "An SOS timer and scheduled risk-window interactions make the next action explicit."
      ],
      [
        "Native behavior with boundaries",
        "Android app-lock and geofence integrations include emergency exit behavior and protected exclusions."
      ]
    ],
    "limit": "An offline-first Android MVP. This image shows the project’s actual Android widget preview resource. Native permissions and production validation require separate review; no medical effectiveness is claimed.",
    "source": "https://github.com/abhranilp1998/no-lean-system/blob/main/README.md",
    "repo": "https://github.com/abhranilp1998/no-lean-system",
    "launch": "https://github.com/abhranilp1998/no-lean-system/releases",
    "launchLabel": "View app releases",
    "image": "assets/work/nolean.png",
    "imageLabel": "Original Android full-widget preview from the NO LEAN repository"
  }
];
