export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
