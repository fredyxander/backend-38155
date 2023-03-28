const AWS = require("aws-sdk");

///configuracion de AWS
AWS.config.update({
    region:"us-east-1"
});

//Configurar los servicios
//DynamoDB-base de datos
const dynamoDB = new AWS.DynamoDB.DocumentClient(); //instancia de la base de datos creada en aws
const dynamoTableName = "productos-table";

//SNS-servicio de mensajeria
const sns = new AWS.SNS(); //Instancia de sns para usarlo en la aplicaciond e nodejs
const SNS_TOPIC_ARN = "Agregar ARN";

module.exports = {dynamoDB, dynamoTableName, sns,SNS_TOPIC_ARN};