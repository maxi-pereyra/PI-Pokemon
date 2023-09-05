const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler')
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler')
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler')
const postPokemonsHandler = require('../handlers/postPokemonsHandler')
const getPokemonByTypeHandler = require('../handlers/getTypesPokemonHandler')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// get | pokemon 
router.get('/pokemon',getAllPokemonsHandler)

router.get('/pokemon/:id', getPokemonByIdHandler)

router.get('/name', getPokemonByNameHandler)

router.post('/pokemons', postPokemonsHandler)

router.get('/types', getPokemonByTypeHandler)

module.exports = router;
