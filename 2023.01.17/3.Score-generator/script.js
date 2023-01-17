// A partir de la fonction isSucceeded prenant comme arguments ces 2 tableaux, 
// comparez les résultats et calculez le pourcentage de 
// bonnes réponses. La fonction renverra un objet contenant le statut de 
// réussite (true ou false) ainsi que le score au test en pourcentage.
// Si le candidat obtient au moins 50 % de bonnes réponses, la variable success sera 
// évaluée à true. Dans le cas contraire, elle sera évaluée à false.


function isSucceeded(ans, res) {
  let success = false;
  let score = 0;
  
  // Insert your code here
    
  const numberOfQuestions = res.length
  for(let i = 0; i < numberOfQuestions; i++){
      if(ans[i] == res[i]){
          score++;
      }
  }
  
  score = score / numberOfQuestions * 100;
  
  if(score >= 70)
    success = true;
  

  return { success: success, score: score };
}

const correctAnswers = [2, 3, 4, 1, 2, 2, 4, 3];
const results = [2, 4, 3, 1, 3, 2, 4, 3];
console.log(isSucceeded(correctAnswers, results));
// Expected: {"success":true,"score":62.5}