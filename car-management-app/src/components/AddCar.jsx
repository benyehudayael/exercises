// src/components/AddCar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddCar = () => {
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            id: uuidv4(),
            model,
            year,
            color,
        };
        dispatch(addCar(newCar));
        setModel("");
        setYear(0);
        setColor("");
    };

    return (
        <div>
            <h2>Add Car</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCar;
