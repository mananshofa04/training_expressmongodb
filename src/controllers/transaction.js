const respond = require('../helpers/respond');
const TransactionModel = require('../models/TransactionModel');

const Transaction = (request, response) => {
    const { email, sku, quantity, note } = request.body;
    TransactionModel.insertMany([
        {
            email,
            sku,
            quantity, 
            note
        }
    ]).then(
        (data) => {
            return respond(response, true, 'Transaction berhasil', data, 201);
        }
    ).catch(
        (e) => {
            return respond(response, false, 'Transaction gagal', e, 500);
        }
    )
    
}

module.exports = Transaction;