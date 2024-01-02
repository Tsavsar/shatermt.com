import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    readTime: z.number(), // In minutes
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional()
  })
});

export const collections = { blog };
