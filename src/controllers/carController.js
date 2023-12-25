const Car = require('../models/Car');

const carController = {
    getAllCars: (req, res) => {
        Car.find()
            .then(cars => res.json(cars))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    addCar: (req, res) => {
        const { carName, model, perKmPrice, isAC } = req.body;
        const newCar = new Car({ carName, model, perKmPrice, isAC });

        newCar.save()
            .then(() => res.json('Car added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    updateCar: (req, res) => {
        Car.findById(req.params.id)
            .then(car => {
                car.perKmPrice = req.body.perKmPrice;
                // Update other fields as needed
                car.save()
                    .then(() => res.json('Car updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },
};

module.exports = carController;
