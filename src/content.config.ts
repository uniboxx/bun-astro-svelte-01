// Import the glob loader
import { glob } from 'astro/loaders';
// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { optional } from 'astro:schema';
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const countries = defineCollection({
  loader: async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
    return data.map((country: any) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: z.object({
    name: z.object({
      common: z.string(),
    }),
    capital: z.optional(z.array(z.string())),
    population: z.number(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, countries };
