const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

module.exports = async (request, response) => {
    try {
        const { email, password, name, telephone, address } = request.body;
        const data = await UserModel.findOne({ email });
        if (data && data !== '') {
            const update = await UserModel.updateOne({
                _id: data._id,
            }, {
                email: email || data.email,
                password: password || data.password,
                name: name || data.name,
                telephone: telephone || data.telephone,
                address: address || data.address
            })

            if (update) {
                return respond(response, true, 'sukses update user', '', 201)
            }
        }

        return respond(response, false, 'data user tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}