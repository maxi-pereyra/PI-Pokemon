const {Pokemon , Types} = require('../db')
const {op} = require('sequelize')

const postPokemons = async ( name, image, types, life, attack, defense, speed, height, weight ) =>{
    const newPokemon = await Pokemon.create({
        name,
        image,
        types,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
    });

    const pokemonType = await Types.findAll({
        where:{
            name:{
                [op.in]: Types.map((tipo) => tipo.toLowerCase())
            }
        }
    })

    await newPokemon.addTypes(pokemonType);

    if(!newPokemon) throw new Error(`El pokemon ${newPokemon.name} no pudo crearse`);
    return `El pokemon ${newPokemon.name} fue creado exitosamente`;
}

module.exports = postPokemons;