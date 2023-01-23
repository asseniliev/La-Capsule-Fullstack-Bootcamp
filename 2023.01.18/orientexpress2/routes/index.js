var express = require('express');
var router = express.Router();

require('../models/connection');
const Trip = require('../models/trips');

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res) => {
  //trips.push({ departure: req.body.departure, arrival: req.body.arrival });
  const newTrip = new Trip({
    departure: req.body.departure,
    arrival: req.body.arrival
  });

  //console.log(req.body.arrival);
  newTrip.save().then(() => {}).then(() =>
    Trip.find().then((data) => {
      res.json({ allTrips: data });
  }));

  // Trip.find().then((data) => {
  //   res.json({ allTrips: data });
  // });
  
});

router.get('/trips', (req, res) => {
  Trip.find().then((data) => {
    res.json({ allTrips: data });
  });
  
  //res.json({ allTrips: trips });
});

router.get('/lastTrip', (req, res) => {
  Trip.find().then((data) => {
    
    res.json({lastTrip: data[data.length - 1]});
  });
  
});

router.delete('/trips', (req, res) => {
  Trip.deleteMany({}).then(() => {})
      .then(() => Trip.find().then((data) =>
    res.json({ data })));  
});

module.exports = router;
