const pokemonTable = document.getElementById('poketable')
const loadmorebtn = document.getElementById('loadmore')

const limit = 6
let offset = 0

function loadMorePokes(offset, limit){ 
    function convertPokeToLi(pokemon) {
       
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{  
        const newHtml = pokemons.map((pokemon) => `
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
                `).join('');  
        pokemonTable.innerHTML += newHtml  
    })
}
loadMorePokes(offset, limit)
loadmorebtn.addEventListener('click', () =>{
    offset += limit
    loadMorePokes(offset, limit)
})
