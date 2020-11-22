const respond = require('../helpers/respond');
const TransactionModel = require('../models/TransactionModel');

const register = (request, response) => {
    const { email, sku, quantity, note } = request.body;
    UserModel.insertMany([
        {
            email,
            sku,
            quantity, 
            note
        }
    ]).then(
        (data) => {
            return respond(response, true, 'Register berhasil', data, 201);
        }
    ).catch(
        (e) => {
            return respond(response, false, 'Register gagal', e, 500);
        }
    )
    
}

module.exports = TransactionModel;