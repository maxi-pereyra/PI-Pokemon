const {Pokemon,Types} = require('../db')
const axios = require('axios')

const URL = 'https://pokeapi.co/api/v2/type';

const getPokemonByType = async () => {

    //obtener data de DB
    const typeDB = await Types.findAll()
    if(typeDB.length>0) return typeDB;

    //obtener data de API
    const response = await axios.get(URL)
    const typesApi = response.data.results;

    //guardar typos en DB
    const typesCreate = typesApi.map(type=> ({
        name: type.name,
        id: Number.parseInt(type.url.slice(31))
    }));

    const typesCreated = await Types.bulkCreate(typesCreate)

    return typesCreated;
}

module.exports = getPokemonByType;