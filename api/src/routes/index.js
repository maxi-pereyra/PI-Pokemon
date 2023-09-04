const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler')
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler')
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// get | pokemon 
router.get('/pokemon',getAllPokemonsHandler)

router.get('/pokemon/:id', getPokemonByIdHandler)

router.get('/name', getPokemonByNameHandler)

module.exports = router;
