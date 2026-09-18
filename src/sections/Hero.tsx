import { Container } from '@/components/layout/Container';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <header id="top" className="hero">
      <Container>
        <h1 className="hero__tagline">{profile.tagline}</h1>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__meta">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="button" href={profile.resumePath}>
            Read my resume
          </a>
          <span className="hero__location">{profile.location}</span>
        </div>
      </Container>
    </header>
  );
}
