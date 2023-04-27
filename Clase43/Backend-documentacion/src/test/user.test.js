const supertest = require("supertest");
const chai = require("chai");
const {app} = require("../app");
const mongoose = require("mongoose");
const {newsModel} = require("../daos/models/news.model");

const request = supertest(app);
const expect = chai.expect;

//pruebas de los endpoints de noticias
describe("api news test",()=>{
    // before(()=>{
    //     console.log("Before: Este codigo se ejecuta antes de todas las pruebas");
    // });

    // beforeEach(()=>{
    //     console.log("BeforeEach: este codigo se ejecuta antes de cada prueba");
    // });

    // after(()=>{
    //     console.log("After: Este codigo se ejecuta al final de todas las pruebas");
    // });

    // afterEach(async()=>{
    //     console.log("AfterEach: Este codigo se ejecuta al finalizar cada prueba");
    //     await newsModel.deleteMany({});
    // });

    it("endpoint get users", async()=>{
        console.log("1 prueba users");
    });

})