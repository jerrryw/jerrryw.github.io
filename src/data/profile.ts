import type { SiteProfile } from './types';

export const profile: SiteProfile = {
  name: 'Jerry Wang',
  tagline: 'I build perception and inference systems that run under real constraints.',
  bio: `Machine learning engineer working where models meet hardware — stereo depth to
control policy, LLM inference on a local GPU, C++/CUDA pipelines that hold frame budget.
I finished an MS in Applied Machine Learning at the University of Maryland in May 2026,
after a CS degree at Rutgers.`,
  location: 'New York Metropolitan Area',
  email: 'jerryhhw23@gmail.com',
  resumePath: '/Jerry_Wang_Resume.pdf',
  channels: [
    {
      label: 'Email',
      value: 'jerryhhw23@gmail.com',
      href: 'mailto:jerryhhw23@gmail.com',
      primary: true,
    },
    {
      label: 'Phone',
      value: '+1 (732) 853-5281',
      href: 'tel:+17328535281',
      primary: true,
    },
    { label: 'GitHub', href: 'https://github.com/jerrryw' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerryhhw/' },
    { label: 'Résumé', href: '/Jerry_Wang_Resume.pdf' },
  ],
};
