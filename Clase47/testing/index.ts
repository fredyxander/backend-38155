import { assertEquals, assertStrictEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

const sumar = (num1:number,num2:number)=>{
    return num1+num2;
}

Deno.test("resultado de suma",()=>{
    const resultado = sumar(5,4);
    assertEquals(resultado,9);
});

Deno.test("comparacion objetos",()=>{
    const objeto1={name:"pepe"};
    const objeto2 = objeto1;
    assertStrictEquals(objeto1,objeto2);
})