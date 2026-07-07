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
    slug: 'vitalsync',
    title: 'VitalSync: Health Intelligence Agent',
    description:
      'Production ReAct agent on Gemini 2.5 Flash with 4 service-routed tools, LLM-as-judge regression suite, and async TTL-scoped memory with per-user observability.',
    longDescription:
      'Built a production-grade health intelligence agent using the ReAct pattern on Gemini 2.5 Flash. Routes queries across 4 specialized tools with semantic-vs-system error classification. Implemented an LLM-as-judge regression suite for automated quality evaluation. Runs async TTL-scoped memory extraction with per-user observability via Helicone. Deployed on AWS with infrastructure as code via Terraform.',
    imageFile: '/projects/vitalsync.png',
    tags: ['React', 'Express', 'TypeScript', 'Prisma', 'AWS', 'Terraform', 'Gemini 2.5 Flash', 'Helicone'],
    liveUrl: 'https://vitalsync.ravibollepalli.me/',
  },
  
    {
      slug: 'rag-on-rails',
      title: 'RAG-on-Rails: Controlled-Experiment RAG Benchmark',
      description:
        'From-scratch RAG benchmark with a single-variable harness across 10 ablations on MultiHop-RAG, lifting Recall@5 from 0.52 to 0.81 and answer correctness from 0.49 to 0.72.',
      longDescription:
        'Built a from-scratch RAG benchmarking pipeline with a controlled-experiment harness that isolates one variable at a time across 10 ablations on MultiHop-RAG (2,556 questions). Lifted Recall@5 from 0.52 to 0.81 using hybrid dense + BM25 retrieval, a cross-encoder reranker, and LLM-based query decomposition. Raised answer correctness from 0.49 to 0.72, measured by a 12-metric RAGAS suite that separates retrieval quality from generation quality, with a Claude Sonnet judge and tracing via Arize Phoenix.',
      imageFile: '/projects/rag-on-rails-cover.svg',
      tags: ['Python', 'BM25', 'Dense Retrieval', 'Cross-Encoder Reranker', 'RAGAS', 'Arize Phoenix', 'Claude Sonnet', 'MultiHop-RAG'],
      liveUrl: 'https://ragonrails/ravibollepalli/rag-on-rails',
    },
  {
    slug: 'miniclaw',
    title: 'MiniClaw: Self-Hosted AI Agent',
    description:
      'Open-ended ReAct agent with sub-agent delegation, planner-reducer split, map-reduce over 200+ Gmail messages, and hybrid SQLite FTS5 + sqlite-vec memory index.',
    longDescription:
      'Self-hosted AI agent built on Claude via AWS Bedrock, implementing the ReAct pattern with sub-agent delegation for complex multi-step tasks. Uses a planner-reducer split for structured reasoning and executes map-reduce pipelines over 200+ Gmail messages. Features two-tier file-based memory (MEMORY.md + daily logs) and a hybrid SQLite FTS5 + sqlite-vec index for fast semantic and keyword retrieval. Deployed on AWS EC2 with MCP tool integrations.',
    imageFile: '/projects/miniclaw.png',
    tags: ['Python', 'Claude (Bedrock)', 'MCP', 'SQLite FTS5', 'sqlite-vec', 'AWS EC2'],
  },
  {
    slug: 'spidey-social',
    title: 'Spidey Social: Serverless Real-Time Social App',
    description:
      '1st place AWS category at Hack_NCState 2026 — serverless social app with geohash-indexed partitions for proximity queries and WebSockets for real-time messaging.',
    longDescription:
      'Award-winning serverless social app built at Hack_NCState 2026, taking 1st place in the AWS category. Uses geohash-indexed DynamoDB partitions for efficient proximity-based queries and WebSockets via API Gateway for real-time messaging. Fully serverless architecture with AWS Lambda, Cognito for auth, and CloudFront/S3 for static delivery. Infrastructure defined and deployed with AWS CDK.',
    imageFile: '/projects/spidey-social.png',
    tags: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'CloudFront', 'S3', 'AWS CDK'],
  },
  {
    slug: 'research-analytics',
    title: 'AI Research Analytics Platform',
    description:
      'COI detection via co-authorship graph traversal across 23K+ relationships; hybrid rule-based + OpenAI publication classification over 800 papers; serving 35+ faculty at NC State.',
    longDescription:
      'Built for NC State, this platform automates conflict-of-interest detection by traversing co-authorship graphs across 23K+ relationships. Combines hybrid rule-based logic with OpenAI API classification to categorize 800+ publications with 96.5% accuracy on author entity resolution. Includes a Gemini-powered summarization dashboard and is deployed on Kubernetes (k3s). Actively used by 35+ faculty members.',
    imageFile: '/projects/mse.png',
    tags: ['Python', 'NetworkX', 'Plotly.js', 'React', 'TypeScript', 'Express.js', 'MySQL', 'OpenAI', 'Gemini', 'Kubernetes'],
    githubUrl: 'https://github.com/MSE-AI-workflows/mse-news',
  },
  {
    slug: 'ffa-course-platform',
    title: 'FFA Course Delivery Platform',
    description:
      'Full-stack multimedia course platform with enrollment, progress tracking, quiz delivery, and Firebase Auth + 3-tier RBAC — serving 500+ users for a 501(c)(3) nonprofit.',
    longDescription:
      'Architected and shipped the complete backend for Finding Finance Association, a nonprofit democratizing finance education for undergraduates. Designed 9 Firestore collections, 14 REST API endpoints, and 35+ React components supporting multimedia course delivery. Built Firebase Auth with 3-tier RBAC securing 13+ protected routes. Features enrollment tracking, progress management, and quiz delivery at scale.',
    imageFile: '/projects/ffa.png',
    tags: ['Next.js 15', 'TypeScript', 'Firestore', 'Firebase Auth', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Finding-Finance-Association/website',
    liveUrl: 'https://www.findingfinanceassociation.com/',
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
