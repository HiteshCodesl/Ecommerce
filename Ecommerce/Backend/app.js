require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors")
const connectToDb = require("./db.js")
const userRoutes = require("./routes/userRoute.js");


connectToDb();
app.use(cors());
app.use(express.json())


app.use("/users",userRoutes )

module.exports = app