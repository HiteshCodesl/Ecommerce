const express = require("express");
const http = require("http")
const port = process.env.PORT || 4000;
const app = require("./app.js")

const server = http.createServer(app)

server.on("errors", (err)=>{
    console.error("server error", err);
    process.exit(1)
})

server.listen(port, ()=>{
    console.log(`server is listning on port ${port}`)
})