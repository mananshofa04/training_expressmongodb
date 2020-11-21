const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

module.exports = async (request, response) => {
    try {
        const { name, age, address, hoby, gender } = request.body;
        const data = await UserModel.findOne({ name });
        if (data && data !== '') {
            const update = await UserModel.updateOne({
                _id: data._id,
            }, {
                name: name || data.name,
                age: age || data.age,
                address: address || data.address,
                hoby: hoby || data.hoby,
                gender: gender || data.gender
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