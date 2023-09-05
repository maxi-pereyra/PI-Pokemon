const {Pokemon, Types} = require('../db')

const getPokemonFromDb = async () => {
    const allPokemon = await Pokemon.findAll({
        include: [
            {
                model: Types,
                attributes: ['name'],
                through: { attributes: [] },
            },
        ],
    });

    return allPokemon.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          life: pokemon.life,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          types: pokemon.Types.map((type) => type.name)
        };
      });
}

module.exports = getPokemonFromDb;
