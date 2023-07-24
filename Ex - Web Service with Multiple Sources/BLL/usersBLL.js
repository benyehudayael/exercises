const placeholderUsersDAL = require('../DAL/placeholderUsers');
const personsJsonDAL = require('../DAL/personsJson');
const mongoUsersDAL = require('../DAL/mongoUsers');

const getAllUsers = async () => {
    try {
        const users = await placeholderUsersDAL.getUsers();

        const result = await Promise.all(users.map(async user => {
            const phone = personsJsonDAL.getPhoneById(user.id);
            const address = await mongoUsersDAL.getAddressByExternalId(user.id);

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: phone,
                address: address
            }
        }));

        return result;
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        throw error;
    }
};

module.exports = { getAllUsers };