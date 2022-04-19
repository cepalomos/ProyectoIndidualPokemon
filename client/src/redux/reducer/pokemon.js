import {POKEMON_FAILURE,POKEMON_SUCCESS,POKEMON_REQUEST} from '../actions/pokemon.js';

const initialState = {
    loading: false,
    pokemon:[],
    error:'',
}

const pokemonUrl = (state = initialState, action) =>{
    switch(action.type){
        case POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POKEMON_SUCCESS:
            return {
                ...state,
                loading:false,
                pokemon: action.payload,
                error: ''
            }
        case POKEMON_FAILURE:
            return{
                ...state,
                loading: false,
                pokemon: [],
                error: action.payload
            }

        default: return state;
    }
}
export default pokemonUrl