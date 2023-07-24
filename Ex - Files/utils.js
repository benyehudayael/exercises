const fs = require('fs');

module.exports = {
    getUserData: function (userId, callback) {
        fs.readFile('phones.json', 'utf8', (err, phoneData) => {
            if (err) {
                callback(err, null);
                return;
            }

            fs.readFile('users.json', 'utf8', (err, userData) => {
                if (err) {
                    callback(err, null);
                    return;
                }

                const phones = JSON.parse(phoneData);
                const users = JSON.parse(userData);

                const userPhones = phones.find(phone => phone.userid === userId);
                const user = users.find(user => user.id === userId);

                if (!userPhones || !user) {
                    callback(new Error(`User with ID ${userId} not found.`), null);
                    return;
                }

                const userDataObject = {
                    id: userId,
                    name: user.name,
                    phones: userPhones.phones
                };

                callback(null, userDataObject);
            });
        });
    }
};