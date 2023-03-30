const twilio = require("twilio");

//credenciales para conectarnos al servicio de twilio
const accountId="twilio Account SID";
const accountToken="twilio Auth Token";

//crear un cliente de node para conectarnos a twilio
const twilioClient = twilio(accountId,accountToken);

const twilioPhone="twilio phone";//este el numero generado desde twilio
const adminTwilio="+celular al que enviamos el mensaje";


module.exports = {twilioPhone, adminTwilio, twilioClient};