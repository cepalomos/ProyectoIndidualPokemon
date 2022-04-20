import React from 'react'
import { Link } from 'react-router-dom'
import '../css/pokemon.css';

export default function Pokemon({id,name,imagen,attack,types}) {
    let number = 0;
  return (
    <Link to={`/pokemon/${id}`}><div className='contenedor_pokemon'>
        <img src={imagen} alt={name} className='pokemon_imagen'/>
        <h1 className='pokemon_name'>{name}</h1>
        <ul className='pokemon_lista'><li className='pokemon_item' key={number}>Fuerza: {attack}</li>
        {types.map(type=>(<li className='pokemon_item' key={++number}>{type}</li>))}</ul>
    </div></Link>
  )
}
