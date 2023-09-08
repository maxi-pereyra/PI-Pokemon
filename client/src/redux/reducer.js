import {GET_ALL_POKEMON, GET_POKEMON_DETAIL, GET_POKEMON_NAME, GET_ALL_TYPES, ERROR, CLEAN_DETAIL,CLEAN_MESSAGE,SORT_TYPE,POST_POKEMON} from './actions-type';

const initialState = {
    Pokemon: [],
    PokemonCopy: [],
    types:[],
    deletePokemonDetail: null,
    message: '',
    filter: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POKEMON:{
            return {
                ...state,
                Pokemon:action.payload,
                PokemonCopy: [...action.payload]
            }
        };

        case GET_POKEMON_DETAIL: {
            return {
                ...state,
                Pokemon: [action.payload]
            }
        }

        case GET_POKEMON_NAME: {
            return{
                ...state,
                Pokemon: action.payload
            }
        }

        case GET_ALL_TYPES: {
            return {
                ...state,
                pokemon: [...state.Pokemon , action.payload ],
                Pokemon:action.payload
            }
        }

        case CLEAN_DETAIL:{
            return {
                ...state,
                deletePokemonDetail: null,
            }
        }

        
        default:
            return {...state}
    }
}

export default reducer;