export const setCars = (cars) => ({
    type: "SET_CARS",
    payload: cars,
});

export const addCar = (car) => ({
    type: "ADD_CAR",
    payload: car,
});

export const deleteCar = (id) => ({
    type: "DELETE_CAR",
    payload: id,
});
