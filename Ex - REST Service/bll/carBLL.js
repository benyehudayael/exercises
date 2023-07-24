let cars = [
    { id: 1, model: "Toyota Corolla", year: 2020, color: "Blue" },
    { id: 2, model: "Honda Civic", year: 2019, color: "Silver" },
    { id: 3, model: "Ford Mustang", year: 2022, color: "Red" },
];

function getAllCars() {
    return cars;
}

function getCarById(id) {
    return cars.find((car) => car.id === id);
}

function addCar(car) {
    cars.push(car);
}

function updateCar(id, updatedCar) {
    const index = cars.findIndex((car) => car.id === id);
    if (index !== -1) {
        cars[index] = { ...cars[index], ...updatedCar };
    }
}

function deleteCar(id) {
    cars = cars.filter((car) => car.id !== id);
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar,
};
