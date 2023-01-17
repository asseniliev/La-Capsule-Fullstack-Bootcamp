const player = document.querySelector('#player');
const speed = 10;

document.body.addEventListener('keydown', function(event){
  managePlayer(event.key);
});

function managePlayer(direction){
  let image = '';
  let posX = player.offsetLeft;
  let posY = player.offsetTop;
  console.log(direction);
  
  switch (direction){
    case 'ArrowUp':
      image = 'https://static.lacapsule.academy/practice/mario/mario-back-1.png';
      posY -= speed;
      break;    
    case 'ArrowDown':
      image = 'https://static.lacapsule.academy/practice/mario/mario-front-1.png';
      posY += speed;
      break;
    case 'ArrowLeft':
      image = 'https://static.lacapsule.academy/practice/mario/mario-left-1.png';
      posX -= speed;
      break;
    case 'ArrowRight':
      image = 'https://static.lacapsule.academy/practice/mario/mario-right-1.png';
      posX += speed;
      break;
    default: 
      image = 'https://static.lacapsule.academy/practice/mario/mario-front-1.png';
      break;
  }

  console.log(`X: ${posX}    ;    Y: ${posY}`);

  player.src = image;
  if(posX < 0) posX = 1985;
  else if(posX > 1985) posX = 0;

  if(posY < 0) posY = 860;
  else if(posY > 860) posY = 0;

  player.style.left = `${posX}px`;
  player.style.top = `${posY}px`;
}

