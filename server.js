const express =require('express')
const mongoose =require('mongoose')
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const cors =require('cors');

mongoose.connect("mongodb://localhost:27017/demo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
    db.on("error", (error)=> console.error(error));
    db.once("open",()=> console.log("connnected to database"));

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    const apiRouter = require("./src/routes/api");
    app.use("/api/v1",apiRouter);
    app.listen("3000",()=>console.log("server started on"));
