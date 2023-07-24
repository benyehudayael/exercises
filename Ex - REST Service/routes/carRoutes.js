const express = require("express");
const router = express.Router();
const carBLL = require("../bll/carBLL");

// Get all cars
router.get("/", (req, res) => {
    const cars = carBLL.getAllCars();
    res.json(cars);
});

// Get car by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const car = carBLL.getCarById(id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
});

// Add a new car
router.post("/", (req, res) => {
    const car = req.body;
    carBLL.addCar(car);
    res.status(201).json({ message: "Car added successfully" });
});

// Update a car by ID
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCar = req.body;
    carBLL.updateCar(id, updatedCar);
    res.json({ message: "Car updated successfully" });
});

// Delete a car by ID
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    carBLL.deleteCar(id);
    res.json({ message: "Car deleted successfully" });
});

module.exports = router;
