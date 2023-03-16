const express = require("express");
const {logger} = require("./logger");

const PORT = 8080;
const app = express();



app.listen(PORT,()=>logger.info(`Server listening on port ${PORT}`));

app.get("/sumar",(req,res)=>{
    // http://localhost:8080/sumar?num1=4&num2=8
    const {num1, num2} = req.query;
    if(!num1 || !num2){
        logger.error("números no ingresados");
        res.send(`La suma no es valida`);
    } else if(!Number.isInteger(parseInt(num1)) || !Number.isInteger(parseInt(num2))){
        logger.error("números inválidos");
        res.send("números inválidos");
    }else{
        logger.info("números correctos, suma correcta");
        res.send(`la suma es ${parseInt(num1) + parseInt(num2)}`)
    }
});


app.get('*', (req, res) => {
    const { url, method } = req
    logger.debug(`Ruta ${method} ${url} no implementada`);
    res.send(`Ruta ${method} ${url} no está implementada`);
});
