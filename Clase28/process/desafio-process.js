//pedimos al usuario un arreglo de numeros
process.stdout.write("Ingresa un arreglo de numeros: ");

//recibir los datos desde la terminal, que ingresa el usuario
process.stdin.on("data",(data)=>{
    //validar si el usuario ingreso la informacion
    if(data.toString().trim().length){
        const input = data.toString().trim();
        //convertir el dato que recibimos a un arreglo
        const arreglo = JSON.parse(input);
        const suma = arreglo.reduce((acc,i)=>acc+i,0);
        console.log({
            numeros:arreglo,
            promedio:suma/arreglo.length,
            max: Math.max(...arreglo),
            min: Math.min(...arreglo),
            ejecutable: process.cwd(),
            pid:process.pid
        });
    } else {
        console.log("dato vacio")
    }
    process.exit();
});