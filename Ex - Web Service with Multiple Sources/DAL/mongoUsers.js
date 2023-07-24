const UserModel = require('../models/userModel');

const getAddressByExternalId = async (externalId) => {
    const user = await UserModel.findOne({ externalId });
    return user ? { city: user.city, country: user.country } : null;
};

module.exports = { getAddressByExternalId };
