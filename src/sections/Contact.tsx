import { Section } from '@/components/layout/Section';
import { profile } from '@/data/profile';

export function Contact() {
  // `primary` is optional, so this filter is also the null check.
  const primary = profile.channels.filter((channel) => channel.primary);
  const secondary = profile.channels.filter((channel) => !channel.primary);

  return (
    <Section
      id="contact"
      title="Contact"
      note="Looking for machine learning and software engineering roles in the New York metro area. Email is the fastest way to reach me."
    >
      <ul className="contact">
        {primary.map((channel) => (
          <li key={channel.href} className="contact__row">
            <span className="contact__label">{channel.label}</span>
            <a href={channel.href}>{channel.value ?? channel.label}</a>
          </li>
        ))}
      </ul>

      <div className="contact__links">
        {secondary.map((channel) => (
          <a key={channel.href} className="button" href={channel.href}>
            {channel.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
