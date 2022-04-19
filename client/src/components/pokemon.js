import React from 'react'

export default function Pokemon({name,imagen,attack,types}) {
  return (
    <div>
        <img src={imagen} alt={name}/>
        <h1>{name}</h1>
        <ul><li>Fuerza: {attack}</li>
        {types.map(type=>(<li>{type}</li>))}</ul>
    </div>
  )
}
