/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Lukas Haracz",

  /** Your UD email — must match the one you signed into the course with. */
  email: "lharacz@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Wilmington, Delaware",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "I co-founded MiniLeaf, a microgreens business. We sell direct to customers at farmers markets and supply Newark Natural Foods.",
    "I'm Head of Operations at BotanIQals, a natural oral care company. We make remineralizing toothpaste, gum, and mouthwash, and we plan to expand into dietary supplements.",
    "I built my own ERP to run production, inventory, and shipping for both businesses."
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
  "I started two businesses while still in school. Running real operations taught me more than any case study.",
  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/photo.svg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "Building a portfolio of decision services, one lane at a time.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I'm a business student at the University of Delaware learning to make good decisions at any scale. This site is my working portfolio: every course challenge deploys here as a live service.",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/LHaracz/my-site ",
};
