import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Scaffolded now so the SEO/AEO structure exists from day one. The collection
// is empty until the first announcement / recap post lands.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
