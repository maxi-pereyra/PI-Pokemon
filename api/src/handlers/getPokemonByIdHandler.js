const getPokemonById = require('../controllers/getPokemonById')

const getPokemonByIdHandler = async (req,res) =>{
    try {
        const {id} = req.params;
        const response = await getPokemonById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({error: error.menssage});
    }

}

module.exports = getPokemonByIdHandler