const supertest = require("supertest");
const expect = require("chai").expect;
const {app} = require("../app");

const request = supertest(app);

//pruebas de los endpoints de noticias
describe("api news test",()=>{
    it("get news",async function(){
        const response = await request.get("/api/news");
        // console.log(response)
        expect(response.status).equal(200);
        expect(response.body.message).equal("noticias de la base de datos");
    });
})