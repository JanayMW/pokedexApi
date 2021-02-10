const baseURL = 'https://pokeapi.co/api/v2/pokemon/1'
 
const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 9; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();




























/*const pokedex = document.getElementById("pokedex");
  console.log(pokedex);



const fetchPokemon = () => {
     
    const promises = [];
    for (let i = 1; i <= 150; i++) { 
       const url = 'https://pokeapi.co/api/v2/pokemon/${i}';
       promises.push(fetch(url).then((res) => res.json()));
    
}
     
   Promise.all(promises).then(results => {
       const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        type: data.types.map((type) => type.type.name).join(' , ')
    }));
      displayPokemon(pokemon);
  });
      
       
};
  
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const html = '<li>Bulbasaur</li>';
    pokedex.innerHTML = html;
}
 
 
 
  fetchPokemon();
 /*
 
 
 
 
 
 
 
 
 
 
 /*const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto';
//const key = 'AIzaSyAsOl4Nypa9hKO6VPsrfQoy0BoOfwsRDmE';
const poke_container =
document.getElementById('poke_container');
const pokemon_number = 150;

const fetchPokemons = async () => {
    for(let i=1; i<=pokemons_number; i++){
       await getPokemon(i); 
    }
}

const getPokemon = async id => {
      const url = 'https://pokeapi.co/api/v2/pokemon/ditto${id}';
      const res = await fetch(url);
      const pokemon = await res.json();
      createPokemonCard(pokemon);
}

fetchPokemons();


function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() +
 pokemon.name.slice(1);

 
const pokeInnerHTML =
   <div class="img-container">
       <img src = "https://pokeapi.co/api/v2/pokemon/ditto${pokemon.id}.png"></img>
   </div>
   ${name};
   
   pokemonElement.innerHTML = pokeInnerHTML;

   poke_container.appendChild(pokemonElement);

}
/*

























/*fetch('${baseURL}?api_key=${key}')
  .then(response => response.json())
  .then(json => displayImage(json));

function displayImage(pokiBall){
    console.log(pokiBall);
  
    let img = document.createElement('img');
  img.className = 'card-img-top';
  img.src = pokiBall.url;

  let title = document.createElement('h1')
  title.class
  
  
  card.insertBefore(img. cardBody);

}

import React from 'react'

export default function cats() {
    return (
        <div>
            
        </div>
    )
}
*/
