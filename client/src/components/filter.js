import React from 'react';
import '../css/filter.css';

export default function Filter({options,selectOption}) {
  return (
    <>
        <select className='filter_select' onChange={({target:{value}})=>selectOption(value)}>
            <option key={0}>--Filtra por tipo--</option>
            {options.length!==0&&options.map(({id,name})=>(<option key={id} value={name}>{name}</option>))}
        </select>

    </>
  )
}
