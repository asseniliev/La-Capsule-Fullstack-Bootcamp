// Insert your code here
const data = require('./data');

function getDrugDescriptionByName(name){
  const medicament = data.find(element => element.name === name);
  return medicament.description;
}

function getDrugTypeByName(name){
  const medicament = data.find(element => element.name === name);
  return medicament.type;
}

function getDrugNamesByGroup(group){
  return filtered = data.filter(med => med.groups.some(gr => gr === group))
                        .map(med => med.name)
                        .sort();
}

//console.log(getDrugDescriptionByName('Metformin'));
//console.log(getDrugTypeByName('Metformin'));
console.log(getDrugNamesByGroup('Investigational'));

