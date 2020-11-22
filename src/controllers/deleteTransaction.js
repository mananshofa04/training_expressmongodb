const respond = require('../helpers/respond');
const TransactionModel = require('../models/TransactionModel');

module.exports = async (request, response) => {
    try {
        const { email } = request.params;
        const data = await TransactionModel.findOne({ email });
        if (data && data !== '') {
            const delTrans = await TransactionModel.deleteOne({
                _id: data._id,
            })

            if (delTrans) {
                return respond(response, true, 'sukses delete transaction', '', 203)
            }
        }

        return respond(response, false, 'data transaction tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}