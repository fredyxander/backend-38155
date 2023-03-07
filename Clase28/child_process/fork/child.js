//recibir el evento de inicio desde el padre
process.on("message",(parentMsg)=>{
    console.log("mensaje desde el padre: ",parentMsg);

    process.send({message:"soy un msg del hijo"})
});