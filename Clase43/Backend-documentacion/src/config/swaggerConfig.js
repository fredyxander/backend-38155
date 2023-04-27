const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition:{
        openapi:"3.0.1",
        info:{
            title:"Documentacion de API noticias",
            version:"1.0.0",
            description: "Manual de gestion de endpoints para la api de noticias"
        }
    },
    apis:['./src/docs/**/*.yaml']
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);
module.exports = {swaggerSpecs}