import type { Degree, Credential } from './types';

export const degrees: readonly Degree[] = [
  {
    degree: 'Master of Science, Applied Machine Learning',
    institution: 'University of Maryland, College Park',
    conferred: 'May 2026',
    location: 'College Park, MD',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'Rutgers University, New Brunswick',
    conferred: 'May 2023',
    location: 'New Brunswick, NJ',
  },
];

export const credentials: readonly Credential[] = [
  {
    title: 'Building Toward Computer Use with Anthropic',
    issuer: 'Anthropic',
    date: 'Aug 2025',
  },
  {
    title: 'AI Infrastructure and Operations Fundamentals',
    issuer: 'NVIDIA',
    date: 'Jul 2025',
  },
];
