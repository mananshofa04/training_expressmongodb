const respond = require('../helpers/respond');
const UserModel = require('../models/UserModel');

module.exports = async (request, response) => {
    try {
        const { name } = request.params;
        const data = await UserModel.findOne({ name });
        if (data && data !== '') {
            const delUser = await UserModel.deleteOne({
                _id: data._id,
            })

            if (delUser) {
                return respond(response, true, 'sukses delete user', '', 203)
            }
        }

        return respond(response, false, 'data user tidak ditemukan', [], 404)
    } catch (error) {
        return respond(response, false, 'internal server error', error, 500);
    }
}