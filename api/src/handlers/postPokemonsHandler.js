const postPokemons = require('../controllers/postPokemons')

const postPokemonsHandler = async (req,res) => {
    try {
        ///const response = req.body;
        const { name, image, types, life, attack, defense, speed, height, weight } = req.body;
        const pokemonCreate = await postPokemons( name, image, types, life, attack, defense, speed, height, weight )
        return res.status(200).json({message: pokemonCreate})
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

module.exports = postPokemonsHandler;