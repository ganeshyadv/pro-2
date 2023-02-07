require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./router/UserRuter");

app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.use("/", userRouter);

let port = process.env.port;
app.listen(port, function () {
    console.log("server started on port", port);
})