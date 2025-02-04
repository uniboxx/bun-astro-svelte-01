import type { APIRoute } from 'astro';
import { turso } from '@turso';
const pathname = import.meta.env.BASE_URL;

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const author = data.get('author');
  const body = data.get('body');

  if (typeof author === 'string' && typeof body === 'string') {
    await turso.execute({
      sql: `insert into posts (author, body) VALUES (?,?)`,
      args: [author, body],
    });
    return redirect(`${pathname}/`, 301);
  }

  return new Response(JSON.stringify({ message: 'Invalid input' }), {
    status: 400,
  });
};
