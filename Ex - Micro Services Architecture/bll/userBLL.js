const usersWS = require('../dal/usersWS');
const todosWS = require('../dal/todosWs');
const usersFile = require('../dal/usersFile');


const getUserData = async (username) => {
    try {
        const { data: users } = await usersWS.getUserDataFromAPI(username);
        const user = users[0];
        const { data: todos } = await todosWS.getUserTasksFromAPI(user.id);
        const titles = todos.map((todo) => todo.title);
        const data = await usersFile.getUserPhonesFromJSON(user.username);
        const { phones } = data.users.find((user) => user.username === username);

        return {
            name: user.name,
            email: user.email,
            tasks: titles,
            phones: phones,
        };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getUserData };
