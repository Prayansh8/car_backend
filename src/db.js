const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://Prayansh811:Prayansh811@cluster0.u7jcnaf.mongodb.net/travel';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

module.exports = mongoose;
