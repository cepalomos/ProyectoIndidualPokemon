import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Form() {
  const [type,setType] = useState([]);
  const [input,setInput] = useState({});
  const [typeForm,setTypeForm] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/types").then(res=>res.json()).then(json=>setType(json));
  },[])
  console.log(typeForm);
  return (
    <form>
      <label htmlFor='nombre'>Nombre</label>
      <input id='nombre' type="text" onChange={({target:{value}})=>setInput({...input,nombre:value})} value={input.nombre}></input>
      <label htmlFor='vida'>Vida</label>
      <input type="number" id="vida" onChange={({target:{value}})=>setInput({...input,vida:value})} value={input.vida}/>
      <label htmlFor='fuerza'>Fuerza</label>
      <input type="number" id="fuerza" onChange={({target:{value}})=>setInput({...input,fuerza:value})} value={input.fuerza}/>
      <label htmlFor='defensa'>Defensa</label>
      <input type="number" id="defensa" onChange={({target:{value}})=>setInput({...input,defensa:value})} value={input.defensa}/>
      <label htmlFor='velocidad'>Velocidad</label>
      <input type="number" id="velocidad" onChange={({target:{value}})=>setInput({...input,velocidad:value})} value={input.velocidad}/>
      <label htmlFor='altura'>Altura</label>
      <input type="number" id="altura" onChange={({target:{value}})=>setInput({...input,altura:value})} value={input.altura}/>
      <label htmlFor='peso'>Peso</label>
      <input type="number" id="peso" onChange={({target:{value}})=>setInput({...input,peso:value})} value={input.peso}/>
      <select onChange={({target:{value}})=>{
        if(typeForm.length<=1&&!typeForm.includes(value))
        setTypeForm([...typeForm,value])}}>
        <option key={0}>--Seleccione typo max 2</option>
        {type.length!==0&&(type.map(({id,name})=><option key={id} value={id}>{name}</option>))}
      </select>
      <ul>{typeForm.length!==0&& typeForm.map(id=> {
        return <li key={id} >{type.find(({id:idtype})=>idtype==id).name}<button onClick={(e)=>{
          e.preventDefault();
          setTypeForm(typeForm.filter(ele => ele!=id))
        }}>X</button></li>
      })}</ul>
      <input type="submit" />
      <Link to="/home"> <button >Cancelar</button></Link>
    </form>
  )
}
