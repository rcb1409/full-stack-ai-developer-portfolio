
export interface Project {
  id: string;
  title: string;
  description: string;
  /** Filename of the project image in public/projects/ (e.g. "neuralvision-dashboard.png") */
  imageFile: string;
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

