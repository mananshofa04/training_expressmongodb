const respond = require('../helpers/respond');
const TransactionModel = require('../models/TransactionModel');

module.exports = async (request, response) => {
    try {
        const { email, sku, quantity, note } = request.body;
        const data = await TransactionModel.findOne({ email });
        if (data && data !== '') {
            const update = await TransactionModel.updateOne({
                _id: data._id,
            }, {
                email: email || data.email,
                sku: sku || data.sku,
                quantity: quantity || data.quantity,
                note: note || data.note
            })

            if (update) {
                return respond(response, true, 'sukses update transaction', '', 201)
            }
        }

        return respond(response, false, 'data transaction tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}