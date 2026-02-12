
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'workspaceAI',
    description: 'A workspace-based document intelligence platform where users upload files and chat with an AI assistant that answers questions grounded strictly in their content',
    imageFile: 'workspaceAI.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'RAG'],
    githubUrl: 'https://github.com/rcb1409/AI-Powered-Document-Intelligence-Platform',
  },
  {
    id: '2',
    title: 'MSE News Portal - NCSU',
    description: 'News management platform enabling 50+ faculty to independently publish content with role-based access control',
    imageFile: 'mse.png',
    tags: ['React', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/MSE-AI-workflows/mse-news',
  },
  {
    id: '3',
    title: 'FFA Course Delivery Platform',
    description: 'Course delivery platform with enrollment, progress tracking, and admin dashboard',
    imageFile: 'ffa.png',
    tags: ['Next.js', 'Firestore', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Finding-Finance-Association/website',
    liveUrl: 'https://www.findingfinanceassociation.com/',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Department of Materials Science and Engineering, NC State University',
    role: 'Software Engineering Research Assistant',
    period: 'October 2025 – Present',
    description: 'Built a research analytics platform that transformed how faculty manage publication data and conflict-of-interest compliance.',
    bulletPoints: [
      'Automated COI detection system processing 27 faculty, 3,605 publications, and 7,861 collaborators using graph algorithms and GenAI classification, reducing review time from 2 hours to 0.5 seconds (14,400x faster) with 98% precision, saving 200+ hours annually across the department',
      'Optimized MySQL queries from 8-12 seconds to 6 milliseconds (1,661x improvement) through strategic indexing, materialized views, and 83% cache hit rate across 64 MB database containing 23,048 author-publication records',
      'Engineered entity resolution pipeline consolidating 23,048 author records into 6,973 unique researchers with 96.5% matching accuracy using OpenAI IDs and ORCID cross-referencing, improving data completeness from 85% to 97.9%',
      'Shipped full-stack news management platform (React, Node.js, MySQL) enabling 50+ faculty to independently publish content, reducing newsletter compilation time by 60% and achieving 85% adoption rate with 100+ bi-weekly subscribers'
    ],
  },
  {
    company: 'Department of Computer Science, NC State University',
    role: 'GenAI Research Assistant',
    period: 'August 2025 – December 2025',
    description: 'Developed an LLM-powered teaching assistant that provided instant, textbook-grounded answers to 65 graduate students in Object-Oriented Design course.',
    bulletPoints: [
      'Built RAG-powered teaching assistant using LangChain and FAISS processing 450-page textbook into 900 semantic chunks with OpenAI embeddings, delivering sub-100ms retrieval and 1.2s end-to-end response times across 450+ student queries in CSC 517 (Object-Oriented Design)',
      'Implemented human-in-the-loop feedback system collecting 200+ student interactions with thumbs-up/down ratings and grounding verification, improving response quality from 72% to 86% positive feedback (20% improvement) through iterative retrieval optimization',
      'Benchmarked LLM architectures (GPT-4, GPT-3.5-turbo, fine-tuned variants) demonstrating 91% of GPT-4 quality at 47% lower inference cost, enabling cost-effective deployment while maintaining high accuracy for 65 graduate students',
      'Reduced TA routine Q&A workload by 40% (6-8 hours/week reclaimed) through automated textbook-grounded responses, allowing teaching assistants to focus on complex conceptual support while students received instant answers'
    ]
  },
  {
    company: 'Finding Finance Association, MO, USA',
    role: 'Full Stack Developer Intern',
    period: 'May 2025 – August 2025 (summer 2025)',
    description: 'Built a full-stack course delivery platform from scratch for a 501(c)(3) nonprofit democratizing finance education for undergraduate students — serving 300+ users across a 3-engineer remote team.',
    bulletPoints: [
      'Architected and shipped the entire backend from scratch using Next.js 15, TypeScript, and Firestore — designing 9 Firestore collections, 14 REST API endpoints, and 35+ React components across 8,885 lines of TypeScript supporting enrollment, progress tracking, quiz completion, and event management for 300+ users',
      'Engineered authentication and role-based access control (RBAC) using Firebase Admin SDK with JWT verification and custom admin claims, securing 13+ protected routes across student and admin roles with server-side middleware protection',
      'Built comprehensive admin dashboard with full CRUD over courses, modules, content blocks, quizzes, and events — eliminating manual Firebase Console edits and reducing operational overhead by 60% (5-10 hours/week saved per admin)',
      'Improved application performance via Next.js 15 Server Components, multi-layer caching (Vercel CDN + Zustand localStorage persistence + debounced Firestore writes), reducing JavaScript bundle size by 35% with measurable LCP and TTFB improvements'
    ]
  },
  {
    company: 'Astragen, India',
    role: 'Software Engineer Intern',
    period: 'May 2025 – August 2025 (summer 2025)',
    description: 'Re-architected backend microservices and data infrastructure for AstraGen\'s offline-first digital classroom platform — serving 1.2M+ students across 2,400+ schools in 12 Indian states.',
    bulletPoints: [
      'Architected and deployed Node.js microservices on AWS (EC2, S3, RDS) for an offline-first classroom platform serving 1.2M+ students across 2,400+ schools — implementing a delta sync service that resolved data conflicts on rural school tablets reconnecting after offline periods, ensuring reliable content delivery of 3D animated lessons, i-Books, and multimedia activities across Class 1-10',
      'Optimized MySQL database performance by remodeling complex multi-table joins across millions of student activity records — applying strategic indexing, stored procedures, connection pooling, and query rewriting to reduce P95 API latency by 25% (from ~800ms to ~600ms) and increase throughput by 30% under production load',
      'Built end-to-end Airflow data pipelines processing millions of student engagement records — tracking time-spent, activity completion, and satisfaction scores across course content — generating automated reports that directly influenced content strategy decisions and contributed to the platform\'s 96% student retention rate',
      'Designed analytics reporting infrastructure using complex SQL queries and stored procedures to surface actionable insights on underperforming content — enabling leadership to make data-driven decisions on curriculum updates across 12 Indian states'
    ]
  },

];

