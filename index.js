const express = require("express");
const cluster = require('node:cluster');
const numCPUs = require('node:os').availableParallelism();

const app = express();
require("dotenv").config();
const PORT = process.env.PORT;



app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})