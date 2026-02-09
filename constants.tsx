
import { Project, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NeuralVision Dashboard',
    category: 'AI / Machine Learning',
    description: 'A real-time object detection and tracking dashboard built with PyTorch and React, optimized for high-performance edge computing.',
    imageUrl: 'https://picsum.photos/seed/ai-vision/800/500',
    tags: ['PyTorch', 'React', 'FastAPI', 'WebSockets'],
  },
  {
    id: '2',
    title: 'EchoStream SaaS',
    category: 'Full Stack Development',
    description: 'Cloud-native content delivery platform for independent creators with built-in analytics and automated transcoding.',
    imageUrl: 'https://picsum.photos/seed/fullstack/800/500',
    tags: ['Next.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
  },
  {
    id: '3',
    title: 'Wolfpack Connect',
    category: 'University Project',
    description: 'Centralized networking portal for NC State graduate students to collaborate on research and find study groups.',
    imageUrl: 'https://picsum.photos/seed/ncstate/800/500',
    tags: ['Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tech Innovators Corp',
    role: 'Software Engineer Intern',
    period: 'Summer 2024',
    description: 'Developed automated CI/CD pipelines and optimized database queries reducing latency by 40%. Implemented core features for the user dashboard.',
  },
  {
    company: 'NCSU AI Lab',
    role: 'Graduate Research Assistant',
    period: 'Aug 2024 - Present',
    description: 'Conducting research on large language models and their application in automated code review. Collaborating with PhD students on distributed training.',
  },
];

export const EDUCATION: Education = {
  institution: 'North Carolina State University',
  degree: 'Master of Science in Computer Science',
  period: '2024 - May 2026',
  location: 'Raleigh, NC',
};
