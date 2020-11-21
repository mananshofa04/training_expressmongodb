const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

const register = (request, response) => {
    const { name, age, address, hoby, gender } = request.body;
    UserModel.insertMany([
        {
            name, 
            address,
            gender,
            age: age || '',
            hoby: hoby || '',
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