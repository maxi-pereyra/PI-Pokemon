const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonById = async (id) => {

    const pokemonApi = (await axios.get(`${URL}/${id}`)).data;
    if(!pokemonApi) throw new Error(`No se encuentra el perro con el id: ${id} en la api`);

    const types = pokemonApi.types.map((type) => type.type.name);

    return{
        name: pokemonApi.name,
        id: pokemonApi.id,
        image: pokemonApi.sprites?.other?.dream_world?.front_default,
        height: pokemonApi.height,
        weight: pokemonApi.weight,
        life: pokemonApi.stats[0].base_stat,
        attack: pokemonApi.stats[1].base_stat,
        defense: pokemonApi.stats[2].base_stat,
        speed: pokemonApi.stats[5].base_stat,
        types: types
    };
}

module.exports = getPokemonById;