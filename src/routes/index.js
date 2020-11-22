const express = require('express');
const { getAllUser, getOneUser } = require('../controllers/getUser');
const route = express.Router();

const register = require("../controllers/register");
const updateUser = require('../controllers/updateUser');
const deleteUser = require('../controllers/deleteUser');
const validationRegister = require("../middlewares/validationRegister");


route.post('/register', validationRegister, register);
route.get('/users', getAllUser);
route.patch('/users', updateUser);
route.get('/users/:email', getOneUser);
route.delete('/users/:email', deleteUser);


module.exports  = route;