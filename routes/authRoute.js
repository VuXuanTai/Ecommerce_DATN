const express = require('express');
const createUser = require('../controller/userCtrl');
const route = express.Router();

route.post("/register", createUser);
module.exports = route;