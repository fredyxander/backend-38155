import { serve } from "https://deno.land/std@0.187.0/http/server.ts";
import { ServerRequest } from "https://deno.land/std@0.92.0/http/server.ts";

const port = 3000;

const extraerFrase = (request: ServerRequest) =>{
    // console.log(request.url);
    const query = request.url.replace(/\//g,"");
    const params = new URLSearchParams(query);
    let frase = params.get("frase");
    console.log("frase", frase);
    if(frase){
        frase = decodeURIComponent(frase); //esto decodifica caracteres especiales
    }
    console.log(frase);
    return frase ?? ""
};

const handler = (request: ServerRequest): Response => {
  const frase = extraerFrase(request);
  console.log(frase);

  return new Response("body", { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });