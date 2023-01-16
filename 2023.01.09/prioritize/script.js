const color = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71'];

const divs = document.querySelectorAll('.criticality');

for(const div of divs){
  const urgence = Number(div.textContent);
  div.style.backgroundColor = color[urgence - 1];  
  const parent = div.parentElement;
  
  if(urgence > 2){
    parent.style.display = 'none';
  }
  else{
    parent.style.display = 'flex';
  }
}