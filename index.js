const express = require("express");
const cluster = require("node:cluster");
const numCPUs = require("node:os").availableParallelism();
const os = require("os");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const totalCPUs = os.cpus().length;
console.log(totalCPUs);

if (cluster.isPrimary) {
  console.log(`primary ${process.id} is running`);
}

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
