const express = require("express");
const config = require("./config/config");

const app = express();
const PORT = config.PORT;

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

console.log(config)