const axios = require('axios');
const userDataAPI = 'https://jsonplaceholder.typicode.com/users';


const getUserDataFromAPI = async (username) => {
    try {
        return axios.get(`${userDataAPI}?username=${username}`);

    } catch (error) {
        throw new Error('User not found.');
    }
}

module.exports = { getUserDataFromAPI };