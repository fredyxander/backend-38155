import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
// console.log(Deno)

//argumentos
console.log(Deno.args);

//variables de entorno
console.log(config());
const {PORT,SECRET_SESSION,ADMIN_EMAIL} = config();
console.log(PORT);
console.log(parseInt(PORT));