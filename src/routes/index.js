const express = require('express');
const { getAllUser, getOneUser } = require('../controllers/getUser');
const { getAllTransaction, getOneTransaction } = require('../controllers/getTransaction');
const { getAllProduct, getOneProduct } = require('../controllers/getProduct');
const route = express.Router();
//users
const register = require("../controllers/register");
const updateUser = require('../controllers/updateUser');
const deleteUser = require('../controllers/deleteUser');
const validationRegister = require("../middlewares/validationRegister");

//transaksi
const updateTrans = require("../controllers/updatetransaction");
const deleteTrans = require('../controllers/deleteTransaction');
const validationtransaction = require("../middlewares/validationtransaction");
const transaction = require("../controllers/transaction");

//product 
const validationproduct = require("../middlewares/validationproduct");
const product = require("../controllers/product");
const updateproduct = require("../controllers/updateproduct");
const deleteProduct = require('../controllers/deleteproduct');

//users
route.post('/register', validationRegister, register);
route.get('/users', getAllUser);
route.patch('/users', updateUser);
route.get('/users/:email', getOneUser);
route.delete('/users/:email', deleteUser);


//transaksi
route.post('/createtransaction', validationtransaction, transaction);
route.get('/transaction', getAllTransaction); 
route.get('/transaction/:email', getOneTransaction);
route.patch('/transaction', updateTrans); 
route.delete('/transaction/:email', deleteTrans);

//product
route.get('/product', getAllProduct);
route.get('/product/:sku', getOneProduct);
route.post('/createproduct', validationproduct, product);
route.patch('/product', updateproduct); 
route.delete('/product/:sku', deleteProduct);









module.exports  = route;