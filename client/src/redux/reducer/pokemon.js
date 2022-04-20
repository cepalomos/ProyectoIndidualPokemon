import {POKEMON_FAILURE,POKEMON_SUCCESS,POKEMON_REQUEST,POKEMON_PAGINATION} from '../actions/pokemon.js';

const initialState = {
    loading: false,
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

        default: return state;
    }
}
export default pokemonUrl