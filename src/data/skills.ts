import type { SkillGroup } from './types';

export const skillGroups: readonly SkillGroup[] = [
  {
    name: 'Languages',
    items: ['Python', 'C++', 'C', 'Java', 'SQL', 'Swift', 'TypeScript'],
  },
  {
    name: 'Machine learning',
    items: [
      'PyTorch',
      'TorchVision',
      'TensorFlow',
      'scikit-learn',
      'YOLO',
      'OpenCV',
      'Reinforcement learning',
      'CUDA',
    ],
  },
  {
    name: 'Infrastructure',
    items: ['AWS (S3, EC2, Lambda, CloudWatch)', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Frameworks & tooling',
    items: ['React', 'FastAPI', 'ROS', 'CI/CD', 'Git', 'pandas', 'NumPy', 'SciPy', 'Jupyter'],
  },
  {
    name: 'Platforms',
    items: ['Linux', 'macOS', 'iOS'],
  },
];
