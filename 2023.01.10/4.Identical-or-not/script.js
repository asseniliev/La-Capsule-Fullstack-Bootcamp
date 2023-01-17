//Le tableau arrays contient des sous-tableaux contenant eux-mêmes des éléments de différentes natures 
//(booléens, nombres, chaîne de caractères…).
//Pour chaque tableau, vérifiez si les éléments présents sont identiques ou différents.
//Si tous les éléments d’un sous-tableau sont identiques, ajoutez la valeur true dans le tableau result. 
//Dans le cas contraire, ajoutez false. Le résultat devra être retourné par la fonction checkDifferences.

function checkDifferences(arrays) {
  let result = [];

  // Insert your code here
  for(const element of arrays){
    let areIdentical = true;
    
    for(el of element){
      //console.log(el);  
      if(el !== element[0]){
        areIdentical = false;
        break;
      }
    }
    result.push(areIdentical);
  }

  return result;
}

console.log(checkDifferences([
  [true, true, true, true],
  ['test', 'test', 'test'],
  [1, 1, 1, 2],
  ['10', 10, 10, 10]
]));
// Expected: true,true,false,false
