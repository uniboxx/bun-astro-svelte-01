import { defineDb, defineTable, column } from 'astro:db';

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Post },
});
