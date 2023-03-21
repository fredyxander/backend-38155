const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();
const coresNumber = os.cpus().length;

// console.log(process.argv);

const PORT = parseInt(process.argv[2]) || 8080;
const MODO = process.argv[3] || "FORK";

if(cluster.isPrimary && MODO === "CLUSTER"){
    for(let i=0;i<coresNumber;i++){
        cluster.fork();
    }
    cluster.on("exit",(worker)=>{
        console.log(`el proceso ${worker.process.pid} murio`);
        cluster.fork();
    });

} else {
    app.listen(PORT,()=>console.log(`Server is listening on port ${PORT} on process ${process.pid}`));

    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000;
        for (let i = 1; i <= max; i++) {
            if (isPrime(i)) primes.push(i)
        }
        res.json(primes);
    });
}

function isPrime(num) {
   if ([2, 3].includes(num)) return true;
   else if ([2, 3].some(n => num % n == 0)) return false;
   else {
       let i = 5, w = 2;
       while ((i ** 2) <= num) {
           if (num % i == 0) return false
           i += w
           w = 6 - w
       }
   }
   return true
};