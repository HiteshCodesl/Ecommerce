require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors")
const connectToDb = require("./db.js")
const userRoutes = require("./routes/userRoute.js");


connectToDb();

app.use(cookieParser())
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users",userRoutes )

module.exports = app