import type { Role } from './types';

export const roles: readonly Role[] = [
  {
    slug: 'eslite',
    company: 'Eslite',
    title: 'Software Engineer Intern',
    start: 'Oct 2020',
    end: 'Aug 2021',
    highlights: [
      'Built a distributed, reproducible data-validation workflow — unit, integration and regression pipelines in CI — that caught regressions before release and lowered the post-release defect rate.',
      'Redesigned an AWS pipeline in production, restructuring S3 storage and replacing synchronous Lambda processing with event-driven messaging.',
      'Wrote CloudWatch monitoring and alerting playbooks that the engineering team adopted, surfacing failure conditions earlier and reducing recurring outages.',
    ],
    metrics: [{ value: '30%', label: 'faster data retrieval' }],
  },
  {
    slug: 'acer',
    company: 'Acer',
    title: 'Software Engineer Intern',
    start: 'Jun 2019',
    end: 'Aug 2019',
    highlights: [
      'Trained a CNN for automated visual inspection and shipped it to the production line through Azure CI/CD.',
      'Refactored on-device inference under runtime constraints, deploying a multithreaded model to embedded ARM / Raspberry Pi hardware.',
      'Ran documentation and workshops that took model architectures and their trade-offs to 30+ engineers, technical and not.',
    ],
    metrics: [
      { value: '95%', label: 'defect-classification accuracy' },
      { value: '35%', label: 'fewer AGV navigation errors' },
    ],
  },
];
