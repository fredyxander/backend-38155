const joi = require("joi");

class newsValidation{
    static newsValidate(newInfo, titleRequired,imageRequired){
        const newSchemaValidation = joi.object({
            titulo: titleRequired ? joi.string().required() : joi.string(),
            descripcion: joi.string(),
            autor: joi.string(),
            imagen: imageRequired ? joi.string().required() : joi.string()
        });
        const {error} = newSchemaValidation.validate(newInfo);
        if(error){
            throw new Error(error.message);
        }
    }
}

module.exports = {newsValidation}