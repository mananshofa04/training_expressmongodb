const respond = require('../helpers/respond');
const ProductModel = require('../models/ProductModel');

module.exports = async (request, response) => {
    try {
        const { sku, name, price, stock } = request.body;
        const data = await ProductModel.findOne({ sku });
        if (data && data !== '') {
            const update = await ProductModel.updateOne({
                _id: data._id,
            }, {
                sku: sku || data.sku,
                name: name || data.name,
                price: price || data.price,
                stock: stock || data.stock
            })

            if (update) {
                return respond(response, true, 'sukses update product', '', 201)
            }
        }

        return respond(response, false, 'data product tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}