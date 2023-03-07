const {exec} = require("child_process");

exec("node consola.js",(err,stdout,stderr)=>{
    if(err) return console.log(err);
    if(stderr) return console.log(stderr);
    console.log("resultado del proceso hijo",stdout);
});

console.log("otro codigo del proceso principal");