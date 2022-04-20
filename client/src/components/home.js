import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { peticionPokemon,pokemon_pagination } from "../redux/actions/pokemon.js";
import Error from "./error.js";
import Loading from "./loading.js";
import Pagination from "./pagination.js";
import Pokemon from "./pokemon.js";

export default function Home() {
  const { loading, pokemon, error,pokemonPage,numberPages } = useSelector((state) => state);
  const dispatch = useDispatch();
  let page = 1;
  useEffect(() => {
    dispatch(peticionPokemon("http://localhost:3001/pokemons"));
  }, []);
  useEffect(()=>{
    dispatch(pokemon_pagination(pokemon.length,page));
  },[pokemon])
  function asincrona(number,e){
    e.preventDefault();
    page = number;
    dispatch(pokemon_pagination(pokemon.length,page));
  }
  return (
    <main className="home_contenedor">
      {loading && <Loading />}
      {!loading && error.length===0 &&pokemonPage.length !== 0 && (
        <ul>
          {pokemonPage.map((poke) => (
            <li key={poke.id}>
              <Pokemon
                name={poke.name}
                imagen={poke.imagen}
                types={poke.types}
                attack={poke.attack}
                id={poke.id}
              />
            </li>
          ))}
        </ul>
      )}
      {error.length > 0 && <Error />}
      {numberPages.length!==0&&<Pagination pages={numberPages} currentPage={asincrona}/>}
    </main>
  );
}
