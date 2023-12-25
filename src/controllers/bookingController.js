const Booking = require('../models/Booking');

const bookingController = {
    getAllBookings: (req, res) => {
        Booking.find()
            .then(bookings => res.json(bookings))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    addBooking: (req, res) => {
        const { userName, phone, address, city, source, destination, carId } = req.body;
        
        const newBooking = new Booking({
            userName,
            phone,
            address,
            city,
            source,
            destination,
            carId,
        });

        newBooking.save()
            .then(() => res.json('Booking added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    updateBooking: (req, res) => {
        Booking.findById(req.params.id)
            .then(booking => {
                // Update booking fields as needed
                booking.save()
                    .then(() => res.json('Booking updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    },

    deleteBooking: (req, res) => {
        Booking.findByIdAndDelete(req.params.id)
            .then(() => res.json('Booking deleted!'))
            .catch(err => res.status(400).json('Error: ' + err));
    },
};

module.exports = bookingController;
