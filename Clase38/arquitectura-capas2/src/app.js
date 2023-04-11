const express = require("express");
const {options} = require("./config/options");
const {connectDB} = require("./config/dbConnection");
const {userRouter} = require("./routes/user.routes");

const app = express();
const port = options.server.port;
connectDB();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//midlewares
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/products", productRouter);