const getPokemonByType = require('../controllers/getPokemmonByType')

const getPokemonByTypeHandler = async (req,res) => {
    try {
        const types = await getPokemonByType();
        if(!types) throw new Error ('ocurrio un error al obtener los tipos de pokemon')
        res.status(200).json({types})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = getPokemonByTypeHandler;