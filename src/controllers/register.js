const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

const register = (request, response) => {
    const { email, password, name, telephone, address} = request.body;
    UserModel.insertMany([
        {
            email,
            password,
            name, 
            telephone,
            address 
        }
    ]).then(
        (data) => {
            return respond(response, true, 'Register berhasil', data, 201);
        }
    ).catch(
        (e) => {
            return respond(response, false, 'Register gagal', e, 500);
        }
    )
    
}

module.exports = register;