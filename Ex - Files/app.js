// 1
const filesUtils = require('./filesUtils');

const targetStreet = 'Abbey Road';

filesUtils.getPersonNameByStreet(targetStreet, (err, names) => {
    if (err) {
        console.error('Error occurred:', err);
        return;
    }

    if (names.length === 0) {
        console.log('No one lives on the specified street.');
    } else {
        console.log(`Persons living on ${targetStreet}: ${names.join(', ')}`);
    }
});
// 2
const utils = require('./utils');

const userIdToFind = 2;

utils.getUserData(userIdToFind, (err, userData) => {
    if (err) {
        console.error('Error occurred:', err);
        return;
    }

    console.log('User Data:', userData);
});