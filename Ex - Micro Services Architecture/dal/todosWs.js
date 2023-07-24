const axios = require('axios');
const userTasksAPI = 'https://jsonplaceholder.typicode.com/todos';

const getUserTasksFromAPI = async (userId) => {
    try {
        return axios.get(userTasksAPI, {
            params: { userId, _limit: 10 }
        });
    } catch (error) {
        throw new Error('Error fetching user tasks.');
    }
}


module.exports = { getUserTasksFromAPI };
