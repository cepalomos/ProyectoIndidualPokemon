import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { peticionPokemon } from "../redux/actions/pokemon.js";
import Loading from './loading.js';
import Pokemon from './pokemon.js';

export default function Home() {
  const {loading,pokemon,error} = useSelector((state)=>state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(peticionPokemon("http://localhost:3001/pokemons"));
  },[])
  if(pokemon.length!==0) console.log(pokemon);
  return (
    <main className='home_contenedor'>
      {loading && <Loading/>}
      {(!loading&&pokemon.length!==0) && (<ul>{pokemon.map(poke=><li key={poke.id}><Pokemon name={poke.name} imagen={poke.imagen} types={poke.types} attack={poke.attack}/></li>)}</ul>)}
    </main>
  )
}
