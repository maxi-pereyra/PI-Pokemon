const getApi = require('../controllers/getApi')

const getApiHandler = async (req,res) => {
    try {
        const pokemons = await getApi();
        if(!pokemons)  throw new Error('No se encuentran pokemones para mostrar');
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getApiHandler;