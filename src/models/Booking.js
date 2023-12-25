const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userName: String,
    phone: String,
    address: String,
    city: String,
    source: String,
    destination: String,
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
    },
    // Add more fields as needed
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
