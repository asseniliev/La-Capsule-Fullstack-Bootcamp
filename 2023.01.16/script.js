function switchKeys(obj) {
  let newCity = {};
  
  // Insert your code here
  for(let property in obj){
    obj[obj[property]] = property;
    delete obj[property];
  }

  newCity = obj;
  
  return newCity;
};

const result = switchKeys({ Paris: 'city', France: 'country', Europe: 'zone' })
console.log(result)
// Expected: { city: 'Paris', country: 'France', zone: 'Europe' }
