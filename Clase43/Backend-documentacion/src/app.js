const express = require("express");
const {options} = require("./config/config");
const { newsRouter } = require("./routes/news.routes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const {swaggerSpecs} = require("./config/swaggerConfig");

const app = express();
const port = options.server.port;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","DELETE"]
}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//routes
app.use("/api/news",newsRouter);
app.use("/api/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs));

module.exports = {app};