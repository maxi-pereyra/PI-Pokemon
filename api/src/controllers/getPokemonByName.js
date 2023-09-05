const getApi = require('./getApi');
const getPokemonFromDb = require('./getPokemonFromDb');


const getPokemonByName = async (name) => {
        const pokemonsApi = await getApi(48);
        const pokemonDB = await getPokemonFromDb();
        const allPokemon = [...pokemonsApi, ...pokemonDB]
        if(name){
            let pokemonFilter = allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
            if(pokemonFilter.length) return pokemonFilter;
            throw new Error(`No se encontro el nombre: ${name}`)
        }else{
            return Error('debe ingresar por lo menos un nombre');
        }
}

module.exports = getPokemonByName;