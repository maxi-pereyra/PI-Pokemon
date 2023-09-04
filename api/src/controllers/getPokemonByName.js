const getApi = require('./getApi');

const getPokemonByName = async (name) => {
        const pokemons = await getApi(48);
        
        if(name){
            let pokemonFilter = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
            if(pokemonFilter.length) return (pokemonFilter);
            throw new Error(`No se encontro el nombre: ${name}`)
        }else{
            return Error('debe ingresar por lo menos un nombre');
        }
}

module.exports = getPokemonByName;