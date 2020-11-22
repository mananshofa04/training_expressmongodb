const respond = require('../helpers/respond');

const validationRegister = (request, response, next) => {
    const { email, password, name, telephone, address } = request.body;
    if (!email || email === '' || !password || password === '' || !name || !name === '' || !telephone || !telephone === '' || !address || !address === '') {
        return respond(response, false, 'Data email, password, name, telephone, address is required', '', 400);
    }

    next();
}

module.exports = validationRegister;