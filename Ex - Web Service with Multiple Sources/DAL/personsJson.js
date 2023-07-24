const data = require('../data/persons.json');

console.log('Loaded data:', data);

const getPhoneById = (id) => {
  const person = data.persons.find(p => p.id === id);
  return person ? person.phone : null;
};

module.exports = { getPhoneById };
