let offset = 0;
let limit = 10;

 
const pokemonTable = document.getElementById('poketable')
 
function convertPokeToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.type}">
                <div class="pokebase">
                    <span class="pokenumber">
                        ${pokemon.number}
                    </span>
                    <span class="pokename">${pokemon.name}</span>
                </div>
                <div class="pokedetails">
                    <ol class="poketypes"> 
                        ${pokemon.types.map((type)=>`<li class="type ${type}"> ${type} </li> `).join('')} 
                    </ol>
                    <img class="pokesprite" src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>  
    `
}

pokeApi.getPokemons().then((pokemons = []) =>{ 

    const newHtml = pokemons.map(convertPokeToLi).join('')
    pokemonTable.innerHTML = newHtml 
        
})