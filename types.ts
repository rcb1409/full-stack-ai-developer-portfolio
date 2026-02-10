
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  bulletPoints?: string[];
}

