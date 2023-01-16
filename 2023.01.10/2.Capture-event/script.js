//Mettez en place une mécanique permettant d'écouter l'événement "mouseover" 
///sur l'ensemble des <li> afin de remplacer le contenu du texte par "Done!" 
//lorsque celui-ci est survolé.

 const liElements = document.querySelectorAll('li');

//  for(const element of liElements){
//   element.addEventListener('mouseover', function(){
//     //console.log(element);
//     this.textContent = 'Done';
//   })
//}

  for(let i = 0; i < liElements.length; i++){
    liElements[i].addEventListener('mouseover', function() {
      liElements[i].textContent = 'Done';
    })
  }
