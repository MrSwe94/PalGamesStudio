import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const endpoint = params.path;
  const workerUrl = `https://palgamesstudio-api.patriksvensk94.workers.dev/api/${endpoint}`;

  const res = await fetch(workerUrl);
  const data = await res.json();

  return json(data);
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ params, request }) {
  const endpoint = params.path;
  const workerUrl = `https://palgamesstudio-api.patriksvensk94.workers.dev/api/${endpoint}`;

  const body = await request.json();

  const res = await fetch(workerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await res.json();

  return json(data);
}
