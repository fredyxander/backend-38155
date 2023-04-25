const https = require("https");
// console.log(https);

const url = "jsonplaceholder.typicode.com";

//crear las opciones de la solicitud
const options = {
    hostname:url,
    port: 443,
    path:"/posts",
    method:"GET"
};

//creamos la peticion
const req = https.request(options,(res)=>{
    let data = "";
    res.on("data",(chunk)=>{
        data += chunk.toString();
    });

    res.on("end",()=>{
        const response = JSON.parse(data);
        console.log(response);
    });
});

req.on("error",err=>console.log(err));
req.end();