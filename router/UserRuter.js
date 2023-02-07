const express = require("express");
const app = express();
const userController = require("../controller/UserController")

app.get("/", userController.home)

module.exports = app;