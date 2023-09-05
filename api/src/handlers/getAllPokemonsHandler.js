const getAllPokemons = require('../controllers/getAllPokemons')

const getAllPokemonsHandler = async (req,res) =>{
    try{
        const allPokemons = await getAllPokemons()
        return res.status(200).json(allPokemons)
    }catch (error){
        //console.log(error);
        return res.status(500).json({error: error.message});
    }
}
module.exports = getAllPokemonsHandler;