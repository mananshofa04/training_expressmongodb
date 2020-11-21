const respond = require('../helpers/respond');

const validationRegister = (request, response, next) => {
    const { name, gender, address } = request.body;
    if (!name || name === '' || !gender || gender === '' || !address || !address === ''){
        return respond(response, false, 'Data name, age, address is required', '', 400);
    }

    next();
}

module.exports = validationRegister;