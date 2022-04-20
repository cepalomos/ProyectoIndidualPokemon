import React from 'react'
import { Link } from 'react-router-dom'

export default function Pokemon({id,name,imagen,attack,types}) {
    let number = 0;
  return (
    <Link to={`/pokemon/${id}`}><div>
        <img src={imagen} alt={name}/>
        <h1>{name}</h1>
        <ul><li key={number}>Fuerza: {attack}</li>
        {types.map(type=>(<li key={++number}>{type}</li>))}</ul>
    </div></Link>
  )
}
