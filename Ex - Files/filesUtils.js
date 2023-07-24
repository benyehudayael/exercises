const fs = require('fs');

module.exports = {
    getPersonNameByStreet: function (streetName, callback) {
        fs.readFile('people.json', 'utf8', (err, data) => {
            if (err) {
                callback(err, null);
                return;
            }

            const people = JSON.parse(data);
            const personsOnStreet = people.filter(person => person.address.street.name === streetName);
            const names = personsOnStreet.map(person => person.name);

            setTimeout(() => {
                callback(null, names);
            }, 2000);
        });
    }
};