import {POKEMON_FAILURE,POKEMON_SUCCESS,POKEMON_REQUEST,POKEMON_PAGINATION,POKEMON_FILTER} from '../actions/pokemon.js';

const initialState = {
    loading: false,
    pokemonUrl:[],
    pokemon:[],
    pokemonPage:[],
    numberPages:[],
    currentPage:1,
    error:'',
}

const pokemonUrl = (state = initialState, action) =>{
    switch(action.type){
        case POKEMON_REQUEST:
            return {
                ...state,
                loading: true,
                error:''
            }
        case POKEMON_SUCCESS:
            return {
                ...state,
                pokemonUrl:action.payload,
                pokemon: action.payload,
                loading:false,
                error: ''
            }
        case POKEMON_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case POKEMON_PAGINATION:
            return{
                ...state,
                pokemonPage:state.pokemon.slice(action.payload.star, action.payload.end),
                currentPage:action.payload.currentPage,
                numberPages:action.payload.numberPages
            }
        case POKEMON_FILTER:
            return {
                ...state,
                pokemon:state.pokemonUrl.filter(({types:[Type1,Type2]})=> Type1 === action.payload || Type2 === action.payload),
                error:'',
            }

        default: return state;
    }
}
export default pokemonUrl