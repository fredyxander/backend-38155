import { serve } from "https://deno.land/std@0.187.0/http/server.ts";

const port = 3000;

const handler = (request: Request): Response => {
  const body = 'respuesta del servidor';

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });