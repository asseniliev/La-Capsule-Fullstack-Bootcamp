function mergeSort(array1, array2) {
  // Insert your code here
  let result = array1;
  for(const arr of array2){
    const isFound = result.some(e => e === arr);
    if(!isFound)
      result.push(arr);
  }

  return result.sort();
}

const users1 = ['Jean', 'Antoine', 'Alexandra'];
const users2 = ['Camille', 'Antoine', 'Louise', 'Jean', 'Paul'];
console.log(mergeSort(users1, users2));
// Expected: Alexandra, Antoine, Camille, Jean, Louise, Paul