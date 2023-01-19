const date = new Date();

let month = (date.getMonth() + 1).toString();

if(month.length === 1) {month = '0' + month;}

const datum = `${date.getFullYear()}-${month}-${date.getDate()}`;

console.log(datum);