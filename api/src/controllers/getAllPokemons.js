const getApi = require('./getApi')

const getAllPokemons = async () => {
    const pokemonsApi = await getApi(50);
    if(pokemonsApi.length === 0) throw new Error('No se encontraron pokemons');
    return pokemonsApi;
};


module.exports = getAllPokemons;