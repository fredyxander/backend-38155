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

    afterEach(async()=>{
        console.log("AfterEach: Este codigo se ejecuta al finalizar cada prueba");
        await newsModel.deleteMany({});
    });

    it("endpoint get news should return an empty array for news", async()=>{
        console.log("1 prueba");
        const response = await request.get("/api/news");
        // // console.log(response)
        expect(response.status).to.equal(200);
        expect(response.body.message).equal("noticias de la base de datos");
        expect(response.body.data).to.be.deep.equal([]);
    });

    it("after create a new, we should get the new id", async()=>{
        console.log("2 prueba")
        const newObject = {
            titulo:"noticia1",
            descripcion: "noticia de tecnología",
            autor:"fredy",
            imagen:"http:imagenes.com/noticia.jpg"
        }
        const response = await request.post("/api/news").send(newObject);
        // // console.log(response)
        expect(response.status).to.equal(200);
        expect(response.body.message).equal("noticia creada");
        expect(response.body.data).to.haveOwnProperty("_id");
    });

    it("after create a new, we should get the news array with one element", async()=>{
        console.log("3 prueba")
        const newObject = {
            titulo:"noticia1",
            descripcion: "noticia de tecnología",
            autor:"fredy",
            imagen:"http:imagenes.com/noticia.jpg"
        }
        const response = await request.post("/api/news").send(newObject);
        // // console.log(response)
        expect(response.status).to.equal(200);
        const results = await request.get("/api/news");
        expect(results.status).to.equal(200);
        expect(results.body.data.length).equal(1);
    });

    it("after create a new, user can delete that new by id", async()=>{
        console.log("4 prueba")
        const newObject = {
            titulo:"noticia1",
            descripcion: "noticia de tecnología",
            autor:"fredy",
            imagen:"http:imagenes.com/noticia.jpg"
        }
        const response = await request.post("/api/news").send(newObject);
        const newIdCreated = response.body.data._id;
        const deleteResponse = await request.delete(`/api/news/${newIdCreated}`);
        expect(deleteResponse.body.message).equal("noticia eliminada");
    });
})