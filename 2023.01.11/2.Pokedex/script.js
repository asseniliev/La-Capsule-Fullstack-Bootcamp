const fixedUrl = 'https://pokeapi.co/api/v2/pokemon/';
const cardsContainer = document.querySelector('#pokemonContainer');

let currentPokemonNumber = 0;

document.querySelector('#next').addEventListener('click', () => {add15Pokemons()});

add15Pokemons();


function add15Pokemons(){
  for(let i = 1; i <= 15; i++){
    currentPokemonNumber++;
    const url = fixedUrl + currentPokemonNumber;
    fetch(url).then(data => data.json())
              .then(data => {addCard(data)});
  }
}



function addCard(pokemon){
  const div = `
    <div class="pokemon ${pokemon.types[0].type.name}">
			<div class="imgContainer">
				<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
			</div>
			<div class="info">
				<h3 class="name">${pokemon.name}</h3>
				<span class="type">Type: <span>${pokemon.types[0].type.name}</span></span>
			</div>
		</div>
  `;

  cardsContainer.innerHTML += div;
}