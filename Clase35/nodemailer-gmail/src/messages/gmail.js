const nodemailer = require("nodemailer");

//credenciales del correo empresarial (correo equipo de ventas)
const adminEmail="Agregar correo";
const adminPasswordEmail="agregar contraseña generada con gmail";

//configurar un canal para realizar el envio de mensajes
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', //aqui utilizamos el host de gmail
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