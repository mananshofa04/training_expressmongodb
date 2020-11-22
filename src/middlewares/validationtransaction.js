const respond = require('../helpers/respond');

const validationTransaction = (request, response, next) => {
    const { email, sku, quantity, note } = request.body;
    if (!email || email === '' || !sku || sku === '' || !quantity || !quantity === '' || !note || !note === '') {
        return respond(response, false, 'Data email, sku, quantity, note is required', '', 400);
    }

    next();
}

module.exports = validationTransaction;