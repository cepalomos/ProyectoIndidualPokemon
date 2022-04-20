import React from 'react'

export default function Filter({options,selectOption}) {
  return (
    <>
        <select onChange={({target:{value}})=>selectOption(value)}>
            {options.length!==0&&options.map(({id,name})=>(<option key={id} value={name}>{name}</option>))}
        </select>
        
    </>
  )
}
