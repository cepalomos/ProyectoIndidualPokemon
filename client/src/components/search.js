import { useState } from "react";
import "../css/search.css";
import { useDispatch} from "react-redux";
import { peticionPokemon, pokemon_pagination} from "../redux/actions/pokemon.js";

export default function Search() {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(peticionPokemon(`http://localhost:3001/pokemons?name=${pokemon}`));
    dispatch(pokemon_pagination(1,1));
  };
  return (
    <div className="search_container">
      <label className="search_label">
        Nombre pokemon
        <input
          className="search_input"
          type="text"
          name="pokemon"
          onChange={({ target: { value } }) => setPokemon(value)}
          value={pokemon}
        />
      </label>
      <button onClick={(e) => handlerClick(e)} className="search_button">Buscar</button>
    </div>
  );
}
