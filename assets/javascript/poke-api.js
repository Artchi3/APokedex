const pokeApi = {}

function convertAPItoPokeData(pokeData){
    const pokemon = new Pokemon();
    pokemon.number = pokeData.id;
    pokemon.name = pokeData.name;
    const types = pokeData.types.map((typeSlot)=>typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeData.sprites.other.home.front_default;
    return pokemon
}

pokeApi.getPokemonData = (pokeUrl)=>{
    return fetch(pokeUrl.url)
    .then((response) => response.json()) 
    .then(convertAPItoPokeData)
}
pokeApi.getPokemons = (offset = 0, limit= 10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?${offset}=0&${limit}=10`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokeurls) => pokeurls.map(pokeApi.getPokemonData))
    .then((dataRequest) => Promise.all(dataRequest))
    .then((pokeData) =>  pokeData)
    .catch((error) => console.log(error))
}