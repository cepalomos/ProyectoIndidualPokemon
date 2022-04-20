import axios from "axios";

export const POKEMON_REQUEST = "POKEMON_REQUEST";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAILURE = "POKEMON_FAULIRE";
export const POKEMON_PAGINATION = "POKEMON_PAGINATION";
export const POKEMON_FILTER = "POKEMON_FILTER";

const pokemon_request = () => {
  return { type: POKEMON_REQUEST };
};
const pokemon_success = (data) => {
  return { type: POKEMON_SUCCESS, payload: data };
};
const pokemon_failure = (error) => {
  return { type: POKEMON_FAILURE, payload: error };
};
const pokemon_page = (numberPages, star, end, currentPage) => {
  return {
    type: POKEMON_PAGINATION,
    payload: { numberPages, star, end, currentPage },
  };
};
const pokemon_filter = (type) => {
  return { type: POKEMON_FILTER, payload: type };
};
const peticionPokemon = (url) => {
  return (dispatch) => {
    dispatch(pokemon_request());
    axios
      .get(url)
      .then(({ data }) => {
        dispatch(pokemon_success(data));
      })
      .catch((error) => {
        dispatch(pokemon_failure("no existe el pokemon"));
      });
  };
};

const pokemon_pagination = (arraylength, currentPage) => {
  return (dispatch) => {
    let numberPages = [];
    const pagesTotal = Math.ceil(arraylength / 12);
    for (let i = 1; i <= pagesTotal; i++) {
      numberPages.push(i);
    }
    if (currentPage <= pagesTotal) {
      let star = (currentPage - 1) * 12;
      let end = star + 12;
      dispatch(pokemon_page(numberPages, star, end, currentPage));
    }else if(pagesTotal===0){
      dispatch(pokemon_failure('No hay informacion'));
    }
  };
};

export { peticionPokemon, pokemon_pagination, pokemon_filter };
