const respond = require('../helpers/respond');
const ProductModel = require('../models/ProductModel');

module.exports = async (request, response) => {
    try {
        const { sku } = request.params;
        const data = await ProductModel.findOne({ sku });
        if (data && data !== '') {
            const delProd = await ProductModel.deleteOne({
                _id: data._id,
            })

            if (delProd) {
                return respond(response, true, 'sukses delete product', '', 203)
            }
        }

        return respond(response, false, 'data product tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}