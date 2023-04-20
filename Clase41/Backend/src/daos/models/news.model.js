const mongoose = require("mongoose");

const newsCollection = "news";

const newsSchema = new mongoose.Schema({
    titulo:String,
    descripcion:String,
    autor:String,
    imagen:String
});

const newsModel = mongoose.model(newsCollection,newsSchema);

module.exports = {newsModel};