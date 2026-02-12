
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  bulletPoints?: string[];
}

