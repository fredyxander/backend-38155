const express = require("express");
const {twilioClient, twilioPhone,adminTwilio} = require("./messages/twilio-sms");

const PORT=8080;

const app = express();

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


//ruta para enviar el mensaje sms
app.post("/sms-twilio",async(req,res)=>{
    try {
        //crear el mensaje que vamos a enviar a traves de twilio
        const info = await twilioClient.messages.create({
            from:twilioPhone,
            to:adminTwilio,
            body:"Se registro un nuevo usuario"
        });
        console.log(info);
        res.send(`El mensaje de texto se envio correctamente`);
    } catch (error) {
        res.send(error);
    }
});