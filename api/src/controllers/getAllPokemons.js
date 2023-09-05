const getApi = require('./getApi')
const getPokemonFromDb = require('./getPokemonFromDb')


const getAllPokemons = async () => {
    const pokemonsApi = await getApi(50);
    dbPokemons = await getPokemonFromDb();
    const allPokemon = [...pokemonsApi, ...dbPokemons]
    if(pokemonsApi.length === 0) throw new Error('No se encontraron pokemons');
    return allPokemon;
};


module.exports = getAllPokemons;