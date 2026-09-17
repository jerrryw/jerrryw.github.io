import { Container } from './Container';
import { profile } from '@/data/profile';

interface NavItem {
  label: string;
  href: string;
}

const items: readonly NavItem[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <Container>
        <div className="nav__inner">
          <a href="#top" className="nav__name">
            {profile.name}
          </a>
          <ul className="nav__links">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
