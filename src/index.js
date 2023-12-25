const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
