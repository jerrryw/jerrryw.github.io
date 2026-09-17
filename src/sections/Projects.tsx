import { Section } from '@/components/layout/Section';
import { TagList } from '@/components/ui/Tag';
import { MetricList } from '@/components/ui/MetricList';
import { projects, domainLabels } from '@/data/projects';
import type { Project } from '@/data/types';

/* ------------------------------------------------------------------ *
 * This file is the worked example. The other sections are stubs — copy
 * the patterns here when you fill them in:
 *
 *   - props typed with an interface, destructured in the signature
 *   - optional fields (`end`, `metrics`, `links`) handled with a guard
 *     before use, never with `!` or `as`
 *   - `key` from a stable slug, never an array index
 *   - one small component per repeated thing
 * ------------------------------------------------------------------ */

interface ProjectEntryProps {
  project: Project;
}

function ProjectEntry({ project }: ProjectEntryProps) {
  // `project.end` is `string | undefined`, so TypeScript will not let you
  // render it without deciding what absence means. Here, absence means ongoing.
  const dateRange = project.end ? `${project.start} — ${project.end}` : `${project.start} — now`;

  return (
    <article
      className={project.featured ? 'project project--featured' : 'project'}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="project__aside">
        <span>{dateRange}</span>
        <span>{domainLabels[project.domain]}</span>
        {project.status === 'active' && <span className="status">Active</span>}
      </div>

      <div>
        <h3 id={`${project.slug}-title`} className="project__title">
          {project.title}
        </h3>
        <p className="project__summary">{project.summary}</p>

        <ul className="project__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project__footer">
          <TagList items={project.stack} label={`Technologies used in ${project.title}`} />
          {project.metrics && <MetricList metrics={project.metrics} />}
          {project.links?.map((link) => (
            <a key={link.href} href={link.href} rel="noreferrer noopener" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      note="Systems I designed and built, most recent first."
    >
      <div className="project-list">
        {projects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
