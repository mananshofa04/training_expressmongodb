const express = require('express');
const { getAllUser, getOneUser } = require('../controllers/getUser');
const { getAllTransaction, getOneTransaction } = require('../controllers/getTransaction');
const route = express.Router();
//users
const register = require("../controllers/register");
const updateUser = require('../controllers/updateUser');
const deleteUser = require('../controllers/deleteUser');
const validationRegister = require("../middlewares/validationRegister");

//transaksi

const validationtransaction = require("../middlewares/validationtransaction");

//users
route.post('/register', validationRegister, register);
route.get('/users', getAllUser);
route.patch('/users', updateUser);
route.get('/users/:email', getOneUser);
route.delete('/users/:email', deleteUser);


//transaksi
route.post('/transaction', validationtransaction);
route.get('/transaction', getAllTransaction); 
route.get('/transaction/:email', getOneTransaction);




module.exports  = route;