// Common TypeScript interfaces and types
export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: 'learn' | 'books';
  coverImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ColorMode = 'default' | 'light' | 'dark' | 'sepia';

export interface ColorTheme {
  name: string;
  icon: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
}