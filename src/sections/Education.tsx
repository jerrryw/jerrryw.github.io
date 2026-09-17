import { Section } from '@/components/layout/Section';
import { degrees, credentials } from '@/data/education';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="entry-list">
        {degrees.map((degree) => (
          <article key={degree.degree} className="entry">
            <div className="entry__aside">
              <span>{degree.conferred}</span>
              {degree.location && <span>{degree.location}</span>}
            </div>
            <div>
              <h3 className="entry__title">{degree.degree}</h3>
              <p className="entry__subtitle">{degree.institution}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">Certifications</h3>
      <ul className="credentials">
        {credentials.map((credential) => (
          <li key={credential.title} className="credential">
            <span>
              {/* `href` is optional, so render a link only when there is one. */}
              {credential.href ? (
                <a href={credential.href} target="_blank" rel="noreferrer noopener">
                  {credential.title}
                </a>
              ) : (
                credential.title
              )}
            </span>
            <span className="credential__meta">
              {credential.issuer}, {credential.date}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
