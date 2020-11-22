const respond = require('../helpers/respond');

const validationProduct = (request, response, next) => {
    const { sku, name, price, stock } = request.body;
    if (!sku || sku === '' || !name || name === '' || !price || price === '' || !stock || stock === '') {
        return respond(response, false, 'Data sku, name, price, stock is required', '', 400);
    }

    next();
}

module.exports = validationProduct;