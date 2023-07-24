const axios = require('axios');
const fs = require('fs');

const getUserFullName = async (username) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: { username },
        });

        if (response.data.length === 0) {
            console.log('User not found.');
            return;
        }

        const fullName = response.data[0].name;
        if (fullName.startsWith('E')) {
            const tasksResponse = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { userId: response.data[0].id },
            });

            const tasksTitles = tasksResponse.data.map((task) => task.title);
            const tasksData = JSON.stringify(tasksTitles, null, 2);

            fs.writeFile('user_tasks.json', tasksData, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log('Tasks titles saved to user_tasks.json');
                }
            });
        } else {
            console.log('User does not have a name starting with "E".');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const usernameToSearch = 'Antonette';
getUserFullName(usernameToSearch);
