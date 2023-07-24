const jf = require('jsonfile');

const file = './data/users.json';

const getUserPhonesFromJSON = () => {
    return jf.readFile(file);
};

module.exports = { getUserPhonesFromJSON };