// src/redux/reducers.js
const initialState = {
    cars: [], // Array to hold all cars fetched from Firebase
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARS":
            return {
                ...state,
                cars: action.payload,
            };
        case "ADD_CAR":
            const newCar = { ...action.payload, status: "isnew" };
            return {
                ...state,
                cars: [...state.cars, newCar],
            };
        case "DELETE_CAR":
            return {
                ...state,
                cars: state.cars.map((car) =>
                    car.id === action.payload ? { ...car, status: "deleted" } : car
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
