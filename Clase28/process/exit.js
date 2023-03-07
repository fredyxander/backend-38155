process.on("exit",()=>{
    console.log("El proceso o la aplicacion termino");
});

for(let i=0;i<1000;i++){
    console.log(i);
    if(i===200){
        process.exit();//forzamos a que el programa termine
    }
}