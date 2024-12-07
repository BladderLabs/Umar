import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    category: z.enum(['learn', 'books']),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  posts,
};