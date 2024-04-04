const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config()
const routes=require('./routes/ToDoRoute');
const cors=require("cors");

const app = express();
const Port=process.env.port ||5000;

app.use(express.json());
app.use(cors());

//connect with database

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connectedto MongoDb...`))
.catch((err)=>console.log(err));

app.use(routes);


app.listen(Port || 5000, () => {
    console.log("Server Started at port 3000");
});
