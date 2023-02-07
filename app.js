require("dotenv").config();
const express = require("express");
const app = express();

let port = process.env.port;
app.listen(port, function () {
    console.log("server started on port", port);
})