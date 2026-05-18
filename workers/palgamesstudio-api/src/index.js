export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Test endpoint
    if (path === '/api/hello') {
      return Response.json({ message: 'Hej från Workern!' });
    }

    // Games endpoint
    if (path === '/api/games') {
      const games = [
        { id: 1, name: 'Project Nova', genre: 'Action' },
        { id: 2, name: 'Echo Rift', genre: 'Adventure' }
      ];
      return Response.json(games);
    }

    // Contact form endpoint
    if (path === '/api/contact' && request.method === 'POST') {
      const data = await request.json();
      return Response.json({
        status: 'OK',
        received: data
      });
    }

    // Default 404
    return new Response('Not found', { status: 404 });
  }
};
