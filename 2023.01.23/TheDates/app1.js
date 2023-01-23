//Complete function 'compareDates' that compares dates 'a' and 'b' from the
//provided objects. The function must return an array containing true or false

function compareDates(arr) {
  let result = [];
  // Insert your code here
  for(const date of arr){
    result.push(date.a < date.b);
  }
  
  return result;
}

const dates = [
 {a: new Date('2018/01/01 08:00:00'), b: new Date('2018/01/01 08:45:00')},
 {a: new Date('2020/07/14 08:45:00'), b: new Date('2020/07/14 08:00:00')},
 {a: new Date('2021/11/23 08:00:00'), b: new Date('2021/11/23 08:00:00')}
]
console.log(compareDates(dates));
// Expected: true,false,false