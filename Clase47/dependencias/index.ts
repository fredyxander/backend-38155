import { parse, format, difference } from "https://deno.land/std@0.187.0/datetime/mod.ts";
import { bgBlue } from "https://deno.land/std@0.185.0/fmt/colors.ts";

const today = parse("20-01-2019","dd-MM-yyyy");
console.log(today);

const todayFormat = format(new Date(), "MM-dd-yyyy hh:mm a");
console.log(todayFormat);

const date0 = new Date("2000-05-14");
const date1 = new Date();
console.log(difference(date0,date1));

console.log(bgBlue("texto de fondo azul"));