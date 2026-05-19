export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  imageFile: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'workspace-ai',
    title: 'workspaceAI',
    description:
      'A workspace-based document intelligence platform where users upload files and chat with an AI assistant that answers questions grounded strictly in their content.',
    longDescription:
      'Built a multi-tenant RAG platform from scratch: users create isolated workspaces, upload PDFs and docs, then query an AI assistant whose answers are grounded exclusively in the uploaded content — no hallucinations from general knowledge. The system uses LangChain, FAISS for vector search, and OpenAI embeddings, deployed on a Next.js + Node.js + PostgreSQL stack.',
    imageFile: '/projects/workspaceAI.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'LangChain', 'FAISS', 'OpenAI', 'RAG'],
    githubUrl: 'https://github.com/rcb1409/AI-Powered-Document-Intelligence-Platform',
  },
  {
    slug: 'mse-news-portal',
    title: 'MSE News Portal — NCSU',
    description:
      'Research analytics platform and news management system enabling 50+ faculty to independently publish content, with automated COI detection and publication analytics.',
    longDescription:
      'A full-stack research platform for NC State\'s Department of Materials Science and Engineering. Includes a news CMS enabling 50+ faculty to publish independently, an automated COI (Conflict of Interest) detection pipeline processing 27 faculty, 3,605 publications, and 7,861 collaborators using graph algorithms and GenAI, and a highly optimized MySQL backend with 1,661x query performance improvement.',
    imageFile: '/projects/mse.png',
    tags: ['React', 'Node.js', 'MySQL', 'Graph Algorithms', 'GenAI', 'OpenAI'],
    githubUrl: 'https://github.com/MSE-AI-workflows/mse-news',
  },
  {
    slug: 'ffa-course-platform',
    title: 'FFA Course Delivery Platform',
    description:
      'Full-stack course delivery platform built from scratch for a 501(c)(3) nonprofit — enrollment, progress tracking, quizzes, and an admin dashboard serving 300+ users.',
    longDescription:
      'Architected and shipped the complete backend for Finding Finance Association, a nonprofit democratizing finance education for undergraduates. Designed 9 Firestore collections, 14 REST API endpoints, and 35+ React components. Built Firebase RBAC with JWT verification securing 13+ protected routes. Created a comprehensive admin dashboard eliminating manual Firebase Console edits.',
    imageFile: '/projects/ffa.png',
    tags: ['Next.js 15', 'TypeScript', 'Firestore', 'Firebase Auth', 'Tailwind CSS', 'Zustand'],
    githubUrl: 'https://github.com/Finding-Finance-Association/website',
    liveUrl: 'https://www.findingfinanceassociation.com/',
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
