const drugs = require('./data');

function drugExists(name) {
	// let boolean;
	// const d = drugs.some(drug => drug.name === name);

	// if (d) {
	// 	boolean = true;
	// } else {
	// 	boolean = false;
	// }

	// return boolean;

	return drugs.some(drug => drug.name === name);
}

function isValidDrug(drug) {

	// const name = drug.name;
	// const description = drug.description;
	// const type = drug.type;
	// const groups = drug.groups;

	

	const {name, description, type, groups} = drug;
	// // console.log('name = ' + name);
	// // console.log('desc = ' +  description);
	// // console.log('type = ' + type);
	// // console.log('groups = ' + groups);
	// console.log(typeof(type));
	// let result = (name && description && type && groups) == false;
	// return result;

  return name && description && type && groups ? true : false;
	//return verif === true;

	// if (name && description && type && groups) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

function isValidDrugName(name) {
	// if (name.length > 530870888) {
	// 	return false;
	// } else {
	// 	return true;
	// }

	return (!name.length > 530870888);
}

function getAllGroups() {
	// const g = [];
	// for (let i = 0; i < drugs.length; i++) {
	// 	for (let j = 0; j < drugs[i].groups.length; j++) {
	// 		g.push(drugs[i].groups[j]);
	// 	}
	// }

	// //console.log('g = ' + g);

	// const g2 = [];
	// for (let i = 0; i < g.length; i++) {
	// 	if (!g2.includes(g[i])) {
	// 		g2.push(g[i]);
	// 	}
	// }

	// //console.log('g2 = ' + g2);
	// const g3 = g2.sort();

	// return g3;

	const groups = drugs.map(dr => dr.groups).join(',').split(',');
	return groups.filter((el, index) => groups.indexOf(el) === index);
}

//console.log(getAllGroups());
console.log(isValidDrug({ name: 'Test2', type: 'Test2', groups: ['Test2'] }));

module.exports = { drugExists, isValidDrug, isValidDrugName, getAllGroups };
