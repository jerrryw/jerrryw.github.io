import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  /** Used as the anchor target for nav links. */
  id: string;
  title: string;
  /** Optional sentence under the title. */
  note?: string;
  children: ReactNode;
}

export function Section({ id, title, note, children }: SectionProps) {
  // Associating the heading with the section by id is what lets screen readers
  // announce "Projects, region" rather than just "region".
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <Container>
        <div className="section__head">
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {note && <p className="section__note">{note}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
