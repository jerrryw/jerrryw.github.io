/**
 * Every piece of content on this site is typed here first, then written as data
 * in the sibling files, then rendered by components. Change content by editing
 * data — not by editing JSX.
 *
 * Read this file top to bottom once. It is a tour of most of the TypeScript
 * you need for a project this size.
 */

/* ------------------------------------------------------------------ *
 * 1. Literal union types
 *
 * `string` would accept "roboticss" or "Robotics" or "". A union of string
 * literals accepts exactly three values and nothing else, and your editor
 * autocompletes them. Use these instead of loose strings wherever the set of
 * valid values is known and small.
 * ------------------------------------------------------------------ */

export type ProjectDomain = 'ml-systems' | 'robotics' | 'perception';

export type ProjectStatus = 'active' | 'complete';

export type LinkKind = 'repo' | 'demo' | 'writeup' | 'paper';

/* ------------------------------------------------------------------ *
 * 2. Interfaces, optional properties, readonly arrays
 *
 * `?` marks a property that may be absent — the compiler then forces you to
 * handle the absent case at the point of use, which is how optional chaining
 * and conditional rendering stop being guesswork.
 *
 * `readonly T[]` says "you may read this array, not mutate it." Content is
 * never mutated at runtime, so say so.
 * ------------------------------------------------------------------ */

export interface ProjectLink {
  kind: LinkKind;
  /** Visible text. Keep it plain: "Source", not "Click here". */
  label: string;
  href: string;
}

export interface Project {
  /** URL-safe id, used for anchors and React keys. */
  slug: string;
  title: string;
  /** One sentence. What it is, in language a non-specialist recruiter parses. */
  summary: string;
  domain: ProjectDomain;
  status: ProjectStatus;
  /** Display strings, e.g. "Jun 2026". Not Date objects — see note below. */
  start: string;
  /** Absent means ongoing. Pairs with status: 'active'. */
  end?: string;
  stack: readonly string[];
  /** 2–3 bullets. What you built and what it achieved. */
  highlights: readonly string[];
  /** Measured results get their own field so they can be rendered as data. */
  metrics?: readonly Metric[];
  links?: readonly ProjectLink[];
  /** Set true on exactly one project — it gets hero placement. */
  featured?: boolean;
}

/**
 * Pulling metrics out of prose lets you typeset them as figures rather than
 * burying "cut latency by 25%" mid-sentence. Numbers are the most persuasive
 * thing on an engineering portfolio; give them somewhere to live.
 */
export interface Metric {
  value: string;
  label: string;
}

export interface Role {
  slug: string;
  company: string;
  title: string;
  start: string;
  end?: string;
  location?: string;
  highlights: readonly string[];
  metrics?: readonly Metric[];
}

export interface SkillGroup {
  /** e.g. "Languages", "AI/ML" */
  name: string;
  items: readonly string[];
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  href?: string;
}

export interface Degree {
  degree: string;
  institution: string;
  /** e.g. "May 2026" */
  conferred: string;
  location?: string;
}

/* ------------------------------------------------------------------ *
 * 3. A shape shared by several components
 *
 * Nav, footer and contact all need the same social links. Declaring the shape
 * once means adding a link later updates every consumer.
 * ------------------------------------------------------------------ */

export interface ContactChannel {
  label: string;
  href: string;
  /**
   * The value to print, when printing it is useful — an email address or a
   * phone number reads better than the word "Email". Absent for links where
   * the URL is noise (GitHub, LinkedIn), so the component falls back to
   * `label`. That fallback is why this is optional rather than required.
   */
  value?: string;
  /** Gets button treatment in the contact section. */
  primary?: boolean;
}

export interface SiteProfile {
  name: string;
  /** Appears in the hero. One line, present tense, concrete. */
  tagline: string;
  /** 2–3 sentences below the tagline. */
  bio: string;
  location: string;
  email: string;
  /** Path relative to /public. Keep this filename stable — it is already
   *  linked from applications you have sent. */
  resumePath: string;
  channels: readonly ContactChannel[];
}

/* ------------------------------------------------------------------ *
 * 4. Utility types
 *
 * `Pick` builds a new type from a subset of another's properties. A compact
 * card does not need every field of a Project, and saying so in the type stops
 * the component quietly depending on fields it should not.
 *
 * Try also: Omit<Project, 'highlights'>, Partial<Project>, Required<Project>.
 * ------------------------------------------------------------------ */

export type ProjectSummary = Pick<
  Project,
  'slug' | 'title' | 'summary' | 'domain' | 'status' | 'stack'
>;

/* ------------------------------------------------------------------ *
 * 5. A mapped type
 *
 * `Record<K, V>` builds an object type with one key per member of K. Because
 * ProjectDomain is a closed union, adding a fourth domain above turns this
 * into a compile error until you supply its label. That is the whole point:
 * the compiler maintains the invariant for you.
 * ------------------------------------------------------------------ */

export type DomainLabels = Record<ProjectDomain, string>;

/* A note on dates: these are display strings, not Date objects. Dates on a
 * portfolio are only ever printed, never compared or arithmetic'd, and
 * `new Date('Jun 2026')` parses inconsistently across engines. If you later
 * want to sort by date, add a separate numeric `order` field rather than
 * reaching for Date. */
