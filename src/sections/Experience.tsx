import { Section } from '@/components/layout/Section';
import { MetricList } from '@/components/ui/MetricList';
import { roles } from '@/data/experience';
import type { Role } from '@/data/types';

interface RoleEntryProps {
  role: Role;
}

function RoleEntry({ role }: RoleEntryProps) {
  const dateRange = role.end ? `${role.start} — ${role.end}` : `${role.start} — now`;

  return (
    <article className="entry" aria-labelledby={`${role.slug}-title`}>
      <div className="entry__aside">
        <span>{dateRange}</span>
        {role.location && <span>{role.location}</span>}
      </div>

      <div>
        <h3 id={`${role.slug}-title`} className="entry__title">
          {role.company}
        </h3>
        <p className="entry__subtitle">{role.title}</p>

        <ul className="entry__highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {role.metrics && <MetricList metrics={role.metrics} />}
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      note="Internships before graduate school. The work since is under Projects."
    >
      <div className="entry-list">
        {roles.map((role) => (
          <RoleEntry key={role.slug} role={role} />
        ))}
      </div>
    </Section>
  );
}
