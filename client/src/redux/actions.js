import axios from 'axios';
import {GET_ALL_POKEMON, GET_POKEMON_DETAIL, GET_POKEMON_NAME, GET_ALL_TYPES, ERROR, CLEAN_DETAIL,CLEAN_MESSAGE,SORT_TYPE,POST_POKEMON}  from './actions-type'

const URL = 'http://localhost:3001/pokemon';

export const getPokemon = () => {

    return async (dispatch) => {
        
        try {
            let {data} = await axios.get(URL);
            if(!data || data.length === 0) throw new Error ('No se encontraron pokemon')
            
            const pokemon = data?.map((poke) => ({
                name: poke.name,
                id: poke.id,
                image: poke.image,
                height: poke.height,
                weight: poke.weight,
                life: poke.life,
                attack: poke.attack,
                defense: poke.defense,
                speed: poke.speed,
                types: poke.types
            }))
            return dispatch({type: GET_ALL_POKEMON, payload: pokemon })
            
        } catch (error) {
            console.log(error)
        }
    }

};

export const pokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${URL}/${id}`)
            if(!data) throw new Error(`No se encontró el pokemon con el id: ${id}`)

            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.image,
                height: data.height,
                weight: data.weight,
                life: data.life,
                attack: data.attack,
                defense: data.defense,
                speed: data.speed,
                types: data.types
            };

            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: pokemon
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPokemonName = (name) => {
    return async (dispatch) => {
        try {
            const  {data} = await axios.get(`${URL}?name=${name}`)

            const pokemonFound = data?.map((pokemon) => ({
                name: pokemon.name,
                id: pokemon.id,
                image: pokemon.image,
                height: pokemon.height,
                weight: pokemon.weight,
                life: pokemon.life,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                types: pokemon.types
            }))

            dispatch({ type: GET_POKEMON_NAME, payload: pokemonFound })

        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(URL)
            if(!data || data.length === 0) throw new Error ('No se encontraron tipos de pokemon')

            dispatch({
                type: GET_ALL_TYPES,
                payload: data,
            });

            return data;
        } catch (error) {
            console.log(error)
        }
    }
}

export const createPokemon = (pokemonCreated) => {
   return async (dispatch) =>{
       try {
           const response = await axios.post(URL, pokemonCreated)
           const createPokemon = response.data; 

           dispatch({
            type: POST_POKEMON,
            payload: createPokemon
           })
       } catch (error) {
           console.log(error)
       }
   }
}

/* export const alphaSort = () => {
    return {
        type: SORT_TYPE,
        payload: type
    }
} */