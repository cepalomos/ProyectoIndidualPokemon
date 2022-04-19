import axios from "axios";

export const POKEMON_REQUEST = "POKEMON_REQUEST";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAILURE = "POKEMON_FAULIRE";

const pokemon_request = () => {
  return { type: POKEMON_REQUEST };
};
const pokemon_success = (data) => {
  return { type: POKEMON_SUCCESS, payload: data };
};
const pokemon_failure = (error) => {
  return { type: POKEMON_REQUEST, payload: error };
};
const peticionPokemon = (url) => {
  return (dispatch) => {
    dispatch(pokemon_request());
    axios
      .get(url)
      .then(({data}) => {
        dispatch(pokemon_success(data));
      })
      .catch((error) => {
        dispatch(pokemon_failure(error));
      });
  };
};

export { peticionPokemon };
