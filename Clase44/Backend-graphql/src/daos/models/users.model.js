const mongoose = require("mongoose");

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String,
    telefono: String,
    edad: Number,
    ubicacion: String
});

const usersModel = mongoose.model(usersCollection, usersSchema);

module.exports = {usersModel}