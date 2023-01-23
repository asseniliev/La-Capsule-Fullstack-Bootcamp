//Develop a function that calculates the time of a trip in minutes

function travelTime(infos) {
  let result = '';
  
  // Insert your code here
  const millisInMinute = 6e4;
  
  const duration = (new Date(infos.arrival) - new Date(infos.departure)) / millisInMinute;
  result = `Temps de trajet estimé : ${duration} minutes`;
  return result;
}

const travel = { departure: '2021/11/23 08:00:00', arrival: '2021/11/23 08:45:00' };
console.log(travelTime(travel));
// Result: Temps de trajet estimé : 45 minutes