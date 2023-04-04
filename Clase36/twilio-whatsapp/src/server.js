const express = require("express");
const {twilioWapp, adminWapp, twilioClient} = require("./messages/twilio-wapp");

const PORT=8080;

const app = express();

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


//ruta para enviar el mensaje sms
app.post("/wapp-twilio",async(req,res)=>{
    try {
        //crear el mensaje que vamos a enviar a traves de twilio
        const info = await twilioClient.messages.create({
            from:twilioWapp,
            to:adminWapp,
            body:"Cuales son los puntos de venta de la tienda."
        });
        console.log(info);
        res.send(`El mensaje de whatsapp se envio correctamente`);
    } catch (error) {
        res.send(error);
    }
});