const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Get all bookings
router.route('/').get(bookingController.getAllBookings);

// Add a new booking
router.route('/add').post(bookingController.addBooking);

// Update booking
router.route('/update/:id').post(bookingController.updateBooking);

// Delete a booking
router.route('/delete/:id').delete(bookingController.deleteBooking);

module.exports = router;
