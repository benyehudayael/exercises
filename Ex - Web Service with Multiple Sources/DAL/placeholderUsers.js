const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  const response = await axios.get(url);
  return response.data;
};

module.exports = { getUsers };
