export interface Skill {
  name: string;
  level: string;
  tooltip: string;
  iconName: string;
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  company: string;
  period: string;
  tags: string[];
  challenge: string;
  solution: string;
  impact: string;
  highlights: string[];
  architectureOverview?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
}
