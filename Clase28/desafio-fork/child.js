const sumar = ()=>{
    let suma = 0;
    for(let i=0;i<5e9;i++){
        suma +=i;
    }
    return suma;
};

//cant=10
// {
//     1:3,
//     2:1,
//     3:1,
//     4:4
// }

//recibimos el mensaje del padre
process.on("message",(parentMsg)=>{
    if(parentMsg === "Iniciar"){
        const resultado = sumar();
        process.send(resultado);
    }
});

module.exports = {sumar}