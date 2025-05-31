import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: './src/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    image: image(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };