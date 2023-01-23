//Write a function that finds what is the time of the next bus passing,
//accordingt to the time of passengers' arrivals (stored in array 'hours'). The buses pass evert 15 min
//(at 0, 15, 30 & 45). 

function busSchedule(data) {
  let result = [];
  
  //data = data.map(dt => dt = new Date(dt)).map(dt => dt.getMinutes());
  // Insert your code here
  
  for(const arrival of data){
    let hour = (new Date(arrival)).getHours();
    let min = (new Date(arrival)).getMinutes();
    
    if(min >= 45){
      min = '00';
      hour = (hour + 1).toString();
    } else if(min >= 30){
      min = '45';
    } else if(min >= 15){
      min = '30';
    } else if(min >= 0){
      min = '15';
    } 
    
    result.push(`Prochain départ à ${hour}h${min}`);
    
  }
  //result = result.join(',');
  return result;
}

const hours = ['2021/11/23 09:05:00', '2021/11/23 09:16:00', '2021/11/23 09:30:00', '2021/11/23 09:52:00'];
console.log(busSchedule(hours));
// Expected: Prochain départ à 9h15,Prochain départ à 9h30,Prochain départ à 9h45,Prochain départ à 10h00
