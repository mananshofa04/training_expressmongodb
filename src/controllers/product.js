const respond = require('../helpers/respond');
const ProductModel = require('../models/ProductModel');

const Product = (request, response) => {
    const { sku, name, price, stock   } = request.body;
    ProductModel.insertMany([
        {
            sku,
            name,
            price, 
            stock
        }
    ]).then(
        (data) => {
            return respond(response, true, 'Product berhasil', data, 201);
        }
    ).catch(
        (e) => {
            return respond(response, false, 'Product gagal', e, 500);
        }
    )
    
}

module.exports = Product;