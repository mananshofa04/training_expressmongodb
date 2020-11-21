const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

exports.getAllUser = async (request, response) => {
    try {
        const data = await UserModel.find();
        if (data && data.length > 0) {
            return respond(response, true, 'data user', data, 200)
        }

        return respond(response, false, 'data user tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get user gagal', error, 500);
    }
}

exports.getOneUser = async (request, response) => {
    try {
        const { name } = request.params;
        const data = await UserModel.findOne({ name });
        if (data && data !== '') {
            return respond(response, true, 'data user', data, 200)
        }

        return respond(response, false, 'data user tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'get user gagal', error, 500);
    }
}