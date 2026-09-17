import { Container } from './Container';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p>
            {profile.name} — {profile.location}
          </p>
          <ul className="footer__links">
            {profile.channels.map((channel) => (
              <li key={channel.href}>
                <a href={channel.href}>{channel.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
