const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carName: String,
    model: String,
    perKmPrice: Number,
    isAC: Boolean,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
