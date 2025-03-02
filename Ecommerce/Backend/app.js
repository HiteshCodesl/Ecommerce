require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
const cors = require("cors")
const connectToDb = require("./db.js")
const userRoutes = require("./routes/userRoute.js");
const adminRoutes = require("./routes/adminRoute.js")
const productRoutes = require("./routes/productRoute.js")
const cartRoutes = require("./routes/cartRoute.js")

connectToDb();

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/cart", cartRoutes)
app.use("/users",userRoutes )
app.use("/admins", adminRoutes)
app.use("/products", productRoutes)

console.log("Registered Routes:");
app._router.stack.forEach((r) => {
  if (r.route) {
    console.log(`${r.route.stack[0].method.toUpperCase()} ${r.route.path}`);
  }
});


module.exports = app

