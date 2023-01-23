//Develop function that retuns an array with the dates later than a key date, sorted

function sortDates(events, date) {
  let result = [];
  
  // Insert your code here
  const limitDate = new Date(date);
  result = events.filter(dt => (new Date(dt.day)) > limitDate).sort();

  //console.log(events.filter(dt => console.log((new Date(dt.day)))));

  return result;
}

const limit = '2021/11/23 12:00:00';
const list = [
 { day: '2021/11/23 09:00:00', event: 'Réunion marketing' },
 { day: '2021/11/23 11:00:00', event: 'Briefing sales' },
 { day: '2021/11/23 13:00:00', event: 'Déjeuner avec un client' },
 { day: '2021/11/23 17:00:00', event: 'Networking' },
 { day: '2021/11/23 19:00:00', event: 'Sport' },
];
console.log(JSON.stringify(sortDates(list, limit)));
// Expected: [
//  { day: '2021/11/23 13:00:00', event: 'Déjeuner avec un client' },
//  { day: '2021/11/23 17:00:00', event: 'Networking' },
//  { day: '2021/11/23 19:00:00', event: 'Sport' },
// ]

//const dat1 = new Date(list[0]); // 2021/11/23 09:00:00
//const dat2 = new Date(limit); // 2021/11/23 12:00:00

// const dat1 = new Date('2021/11/23 09:00:00'); // 2021/11/23 09:00:00
// const dat2 = new Date('2021/11/23 12:00:00'); // 2021/11/23 12:00:00
// console.log(dat1);
