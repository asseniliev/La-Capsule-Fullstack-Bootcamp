function drawCatCadre(cadre){
  return `https://raw.githubusercontent.com/La-Capsule-Bootcamp/static/main/catwalk/cat-${cadre}.jpg`;
}

let myCycle;
let isRunning = false;
let index = 1;

function runTheCat(){  
  myCycle = setInterval(() => {
    document.querySelector('#cat-run').src = drawCatCadre(index);
    index++;
    if (index > 10) {
      index = 1;
    }
  }, 100);
}



document.body.addEventListener('keydown', function(event){
  if(event.key === 'Enter') {
    isRunning = !isRunning;
    if(isRunning)
      runTheCat();
    else
      clearInterval(myCycle);  
  }
  
  
})








