const express = require("express");
const { transporter } = require("./messages/gmail");

const PORT=8080;

const app = express();

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

//template del cuerpo del mensaje que queremos enviar
const emailTemplate = `<div>
        <h1>Bienvenido!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Explorar</a>
</div>`;

const userEmail="usuario@gmail.com";//Agregar correo del usuario al que enviamos el correo

//Estructura del correo
const mailOptions = {
    from:"servidor node",//quien envia el correo
    to:userEmail,//receptor del correo
    subject:"correo enviado desde node",//asunto del correo
    html:emailTemplate
};

//ruta para enviar el correo
app.post("/email-coder",async(req,res)=>{
    try {
        await transporter.sendMail(mailOptions);
        res.send(`se envio el mensaje a ${userEmail}`);
    } catch (error) {
        res.send(error);
    }
});