let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function getBiggestIn1DArray(array){
  let max = Number.MIN_SAFE_INTEGER;
  for(const number of array){
    //console.log(number);
    if(number > max){
      max = number;
    }
  }

  return max;
}


function getBiggest(numbers) {
    let bigNumbers = [];

    for(const array of numbers){
      //console.log(array);
      bigNumbers.push(getBiggestIn1DArray(array));
    }
    
    return bigNumbers;
}

//getBiggest(list);
console.log(getBiggest(list));
// Expected result : [5,27,39,1001]