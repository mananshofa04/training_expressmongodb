const respond = require('../helpers/respond');
const TransactionModel = require('../models/TransactionModel');

exports.getAllTransaction = async (request, response) => {
    try {
        const data = await TransactionModel.find();
        if (data && data.length > 0) {
            return respond(response, true, 'data Transaction', data, 200)
        }

        return respond(response, false, 'data Transaction tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get Transaction gagal', error, 500);
    }
}

exports.getOneTransaction = async (request, response) => {
    try {
        const { email } = request.params;
        const data = await TransactionModel.findOne({ email });
        if (data && data !== '') {
            return respond(response, true, 'data Transaction', data, 200)
        }

        return respond(response, false, 'data Transaction tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get Transaction gagal', error, 500);
    }
}