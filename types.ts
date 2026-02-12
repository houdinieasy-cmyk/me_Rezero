
export interface Book {
  id: string;
  title: string;
  year: string;
  description: string;
  link: string;
  coverImage: string;
}

export interface Presentation {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

export interface Experience {
  id: string;
  period: string;
  position: string;
  organization: string;
}

export type Section = 'home' | 'books' | 'presentations' | 'videos' | 'contact' | 'assistant' | 'career' | 'admin';
