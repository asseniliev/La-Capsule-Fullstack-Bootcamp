var express = require('express');
var router = express.Router();

let weather = [
  { cityName: 'London', description: 'cloudy', tempMin: 12.95, tempMax: 17.39 },
  { cityName: 'Rio de Janeiro', description: 'sunny', tempMin: 23.98, tempMax: 28.63 },
  { cityName: 'Stockholm', description: 'sunny', tempMin: 6.03, tempMax: 10.59 },
];

router.post('/weather', (req, res) =>{
  const requestedCity = req.body.cityName.toLowerCase();
  
  if(weather.some(element => element.cityName.toLowerCase() === requestedCity) ){
    res.json({result: false, error: 'City already saved'});
  } else {
    const newLocation = {
      cityName: req.body.cityName,
      description: req.body.description,
      tempMin: req.body.tempMin,
      tempMax: req.body.tempMax
    }

    weather.push(newLocation);
    res.json({result: true, weather: newLocation});
  }
    
});

// POST /weather - Sample result: 
/*{
  "result": true,
  "weather": {
    "cityName": "Lille",
    "description": "sunny",
    "tempMin": "15.2",
    "tempMax": "22.7"
  }
} 
OR
{
  "result": false,
  "error": "City already saved"
}
*/

router.get('/weather', (req, res) => {
  res.json({ weather: weather});
});

// GET /weather - Sample result: 
/*{
  "weather": [
    {
      "city": "London",
      "description": "cloudy",
      "tempMin": 12.95,
      "tempMax": 17.39
    },
    {
      "city": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "city": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
} */

router.get('/weather/:cityName', (req, res) => {
  const searchResult = weather.find(element => element.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  console.log(searchResult);
  if(searchResult === undefined){
    res.json({result: false, error: 'City not found'});
  } else {
    res.json({result: true, weather: searchResult});
  }  
});

// GET /weather/:cityName - Sample result: 
/*{
  "result": true,
  "weather": {
    "cityName": "London",
    "description": "cloudy",
    "tempMin": 12.95,
    "tempMax": 17.39
  }
}
OR
{
  "result": false,
  "error": "City not found"
} */

router.delete('/weather/:cityName', (req, res) => {
  const searchedIndex = weather.findIndex(element => element.cityName.toLowerCase() === req.params.cityName.toLowerCase());
  if(searchedIndex ===  -1){
    res.json({result: false, error: 'City not found'});
  } else {
    weather.splice(searchedIndex, 1);
    res.json({result: true, weather: weather});
  }
})


// DELETE /weather/:cityName - Sample result: 
/*{
  "result": true,
  "weather": [
    {
      "cityName": "Rio de Janeiro",
      "description": "sunny",
      "tempMin": 23.98,
      "tempMax": 28.63
    },
    {
      "cityName": "Stockholm",
      "description": "sunny",
      "tempMin": 6.03,
      "tempMax": 10.59
    }
  ]
}
OR
{
  "result": false,
  "error": "City not found"
} */

module.exports = router;
