const express = require("express");
const {options} = require("./config/options");
const {userRouter} = require("./routes/user.routes");


const app = express();
const port = options.server.port;

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//midlewares
app.use(express.json());

app.use("/api/users",userRouter);
// app.use("/api/products", productRouter);