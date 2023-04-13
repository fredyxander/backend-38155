//formateo
const user = {
    nombre: "pepe",
    cursos: [{
            titulo: "javascript",
            nivel: "basico"
        },
        {
            titulo: "node",
            nivel: "basico"
        }
    ]
}

//inyeccion de depndencias
class SendMessageEmail{
    constructor(){
        this.sender = new SendEmail()
    }
};
class SendMessageSMS{
    constructor(){
        this.sender = new SendSMS()
    }
}
//UTILZANDO inyeccion de dependencias
class SendMessage{
    constructor(sender){
        this.sender = sender;
    }
}
const emisorEmail = new SendMessage(new SendEmail());
const emisorSMS = new SendMessage(new SendSMS());