const express = require("express");
const {ProductRouter} = require("./routes/products.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.get("/",(req,res)=>{
    res.send("Welcome to aws with nodejs");
});

app.use("/api/products", ProductRouter);