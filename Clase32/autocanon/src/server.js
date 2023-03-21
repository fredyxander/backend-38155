const express = require("express");
const crypto = require("crypto");

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT} on process ${process.pid}`));

const users = {};
//{"fredy":{},"laura":{},pepe:{}}

app.get("/getUsers", (req, res) => {
    res.json({ users })
});
//REGISTRO
app.get("/newUser", (req, res) => {
    let username = req.query.username || "";
    const password = req.query.password || "";

    //corregir caracteres indebidos fredy& ->fredy
    username = username.replace(/[!@#$%^&*]/g, "");

    //verficar si el usuario ingreso los datos y verificar si el usuario ya existe
    if (!username || !password || users[username]) {
      return res.sendStatus(400);
    }

    //sino existe el usuario, generamos un algoritmo para encriptar la constrasena del usuario
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

    //guardamos el usuario users:{"fredy":{salt:"",hash:""}}
    users[username] = { salt, hash };

    res.sendStatus(200);
});

//LOGIN-OPERACIONES SINCRONAS
app.get("/auth-bloq", (req, res) => {
    let username = req.query.username || "";
    const password = req.query.password || "";

    username = username.replace(/[!@#$%^&*]/g, "");

    if (!username || !password || !users[username]) {
      return res.sendStatus(400);
    }

    const { salt, hash } = users[username];
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

    if (crypto.timingSafeEqual(hash, encryptHash)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
});


//LOGIN-OPERACIONES ASINCRONAS-NO BLOQUEANTE
app.get("/auth-nobloq", (req, res) => {
    let username = req.query.username || "";
    const password = req.query.password || "";
    username = username.replace(/[!@#$%^&*]/g, "");

    if (!username || !password || !users[username]) {
      return res.sendStatus(400);
    }
    //metodo asincrono para encriptar la contrasena
    crypto.pbkdf2(password, users[username].salt, 10000, 512, 'sha512', (err, hash) => {
      if (users[username].hash.toString() === hash.toString()) {
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    });
});
