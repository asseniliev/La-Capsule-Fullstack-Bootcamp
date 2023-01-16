// Écrivez un événement qui se déclenche au clic sur l’élément portant l’ID item-2.
// Au clic sur l’élément portant l’ID item-2, modifiez le contenu du texte par "Done!" 
// grâce à l’opérateur this. 

document.querySelector('#item-2').addEventListener('click', function() {
  this.textContent = 'Done';
})