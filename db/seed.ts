import { db, Post } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Post).values([
    { author: 'unibox', body: "Questo l'ho scritto io" },
    { author: 'altro', body: "Questo l'ha scritto qualcun altro" },
  ]);
}
