const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  arrival: String,
  departure: String  
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;