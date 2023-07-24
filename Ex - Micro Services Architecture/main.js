const userBLL = require('./bll/userBLL');

const username = 'Bret';

userBLL.getUserData(username)
    .then(data => {
        console.log('User Data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
