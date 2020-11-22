const respond = require('../helpers/respond');
const ProductModel = require('../models/ProductModel');

exports.getAllProduct = async (request, response) => {
    try {
        const data = await ProductModel.find();
        if (data && data.length > 0) {
            return respond(response, true, 'data Product', data, 200)
        }

        return respond(response, false, 'data Product tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get Product gagal', error, 500);
    }
}

exports.getOneProduct = async (request, response) => {
    try {
        const { sku } = request.params;
        const data = await ProductModel.findOne({ sku });
        if (data && data !== '') {
            return respond(response, true, 'data Product', data, 200)
        }

        return respond(response, false, 'data Product tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get Product gagal', error, 500);
    }
}