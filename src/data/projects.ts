import type { Project, DomainLabels } from './types';

/**
 * Because ProjectDomain is a closed union, deleting a line here is a compile
 * error rather than an undefined label at runtime.
 */
export const domainLabels: DomainLabels = {
  'ml-systems': 'ML systems',
  robotics: 'Robotics',
  perception: 'Perception',
};

export const projects: readonly Project[] = [
  {
    slug: 'personal-ai-agent',
    title: 'Personal AI Agent',
    summary:
      'A local assistant that runs language model inference on my own hardware, so nothing I ask it leaves the machine.',
    domain: 'ml-systems',
    status: 'active',
    start: 'Jun 2026',
    stack: ['MLX', 'Apple Silicon', 'FastAPI', 'Swift', 'SwiftUI', 'Llama'],
    highlights: [
      'Self-hosted MLX inference server on Apple Silicon with a SwiftUI iPhone client that streams tokens over the local network — no third-party API in the path.',
      'Structured tool-calling for web search, calendar and reminders, so the assistant takes actions instead of only describing them.',
      'Every state-changing call is gated behind explicit user approval, which keeps an autonomous loop from writing to a calendar on a bad plan.',
    ],
    featured: true,
    // TODO: add links once the repo is public.
    // links: [{ kind: 'repo', label: 'Source', href: 'https://github.com/jerrryw/...' }],
  },
  {
    slug: 'uav-obstacle-avoidance',
    title: 'Depth-Based Obstacle Avoidance for UAVs',
    summary:
      'A reinforcement learning policy that flies a drone through cluttered space using stereo depth alone.',
    domain: 'robotics',
    status: 'complete',
    start: 'Sep 2025',
    end: 'Dec 2025',
    stack: ['PPO', 'ROS 2', 'Gazebo', 'PX4', 'HPC'],
    highlights: [
      'Trained the perception-to-control policy end to end, mapping stereo depth streams directly to continuous velocity commands.',
      'Built a reproducible evaluation harness over a modular ROS 2 node graph, decoupling perception, planning and control so each could be tested alone — which surfaced brittle transfer cases early and gave the team a shared regression baseline.',
    ],
    metrics: [{ value: '50+', label: 'closed-loop SITL trials' }],
  },
  {
    slug: 'carla-perception',
    title: 'CARLA Driving Perception Pipeline',
    summary:
      'An end-to-end autonomous driving perception stack, rebuilt in C++/CUDA to hold real-time throughput.',
    domain: 'perception',
    status: 'complete',
    start: 'Jun 2025',
    end: 'Sep 2025',
    stack: ['PyTorch', 'YOLO', 'OpenCV', 'CARLA', 'C++', 'CUDA'],
    highlights: [
      'Designed the full flow solo over four months: image ingestion, preprocessing, augmentation and automated label resolution across a multimodal labeled dataset.',
      'Profiled the real-time path and ported the critical preprocessing and inference stages from Python to modular C++/CUDA.',
    ],
    metrics: [{ value: '25%', label: 'lower per-frame latency' }],
  },
];
