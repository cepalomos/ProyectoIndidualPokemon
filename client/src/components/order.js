import React from 'react';
import '../css/order.css';

export default function Order({order}) {
  return (
    <div>
        <select className='contenedor_select' onChange={({target:{value}})=>order(value)}>
            <option>--Ordenamiento nombre--</option>
            <option value={"ASC"}>A-Z</option>
            <option value={"DES"}>Z-A</option>
        </select>
        <select className='contenedor_select' onChange={({target:{value}})=>order(value)}>
        <option>--Ordenamiento fuerza--</option>
            <option value={"SASC"}>Weaker</option>
            <option value={"SDES"}>Stonger</option>
        </select>
    </div>
  )
}
