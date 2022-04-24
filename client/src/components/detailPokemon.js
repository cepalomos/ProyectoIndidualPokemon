import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/detailPokemon.css';

export default function DetailPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const err = <p>Hay un error el pokemon no existe en la base de datos</p>;
  const loading = <h1>Cargando</h1>;
  return (
    <main className="mainDetail_contenedor">
      <div className="contenedor_condicional">
        {error.length !== 0 && err}
        {pokemon.length !== 0 && (
          <>
            <h3 className="pokemonDetail_titulo">{pokemon.name}</h3>
            <div className="contenedor_pokemonDetail">
              <img
                src={pokemon.image}
                className="image_pokemonDetail"
                alt={pokemon.name}
              />
              <article className="contenedor_article">
                <p className="pokemonDetail_data">Fuerza: {pokemon.attack}</p>
                <p className="pokemonDetail_data">defensa: {pokemon.defense}</p>
                <p className="pokemonDetail_data">Altura: {pokemon.height}</p>
                <p className="pokemonDetail_data">Vida: {pokemon.life}</p>
                <p className="pokemonDetail_data">Velocidad: {pokemon.speed}</p>
                <p className="pokemonDetail_data">Peso: {pokemon.weight}</p>
                {pokemon.types.map((typo) => (
                  <p className="pokemonDetail_data" key={typo}>
                    {typo}
                  </p>
                ))}
              </article>
            </div>
          </>
        )}
        {pokemon.length === 0 && error.length === 0 && loading}
      </div>
      <Link to="/home">
        <button className="botton_home">Home</button>
      </Link>
    </main>
  );
}
