const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.route('/').get(carController.getAllCars);

// Add a new car
router.route('/add').post(carController.addCar);

// Update car price and distance
router.route('/update/:id').post(carController.updateCar);

module.exports = router;
