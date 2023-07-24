import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../redux/actions';

const Cars = () => {
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();

    const handleDelete = (carId) => {
        dispatch(deleteCar(carId));
        console.log(cars)
    };

    return (
        <div>
            <h2>Cars</h2>
            {cars.length === 0 ? (
                <p>No cars available</p>
            ) : (
                <ul>
                    {cars.map((car) => (
                        car.status !== 'deleted' && (
                            <li key={car.id}>
                                {car.model} - {car.year} - {car.color}{" "}
                                <button onClick={() => handleDelete(car.id)}>Delete</button>
                            </li>
                        )
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cars;
