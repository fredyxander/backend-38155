const nodemailer = require("nodemailer");

//credenciales del correo empresarial (correo equipo de ventas)
const adminEmail="lola84@ethereal.email";
const adminPasswordEmail="811FErA9UYHkK9Wan6";

//configurar un canal para realizar el envio de mensajes
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: adminEmail,
        pass: adminPasswordEmail
    },
    //importante para agregar seguridad al canal de comunicacion
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

module.exports = {transporter,adminEmail}