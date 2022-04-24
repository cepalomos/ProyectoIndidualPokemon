import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/form.css';
import validation from '../functions/validacion';

export default function Form() {
  const [type,setType] = useState([]);
  const [input,setInput] = useState({});
  const [typeForm,setTypeForm] = useState([]);
  const [error,setError] = useState({});
  useEffect(()=>{
    fetch("http://localhost:3001/types").then(res=>res.json()).then(json=>setType(json));
  },[])
  useEffect(()=>{
    validation(input,setError,error);
  },[input]);
  return (
    <form className='form_contenedor' method='post' action=''>
      <legend className='form_titulo'>Crear Pokemon</legend>
      <label className='form_label' htmlFor='nombre'>Nombre</label>
      <input className='form_input' id='nombre' type="text" onChange={({target:{value}})=>setInput({...input,nombre:value})} value={input.nombre}></input>
      <p className='error_name'>{error?.name}</p>
      <label className='form_label' htmlFor='vida'>Vida</label>
      <input className='form_input' type="number" id="vida" onChange={({target:{value}})=>setInput({...input,vida:value})} value={input.vida}/>
      <p className='error_vida'>{error?.vida}</p>
      <label className='form_label' htmlFor='fuerza'>Fuerza</label>
      <input className='form_input' type="number" id="fuerza" onChange={({target:{value}})=>setInput({...input,fuerza:value})} value={input.fuerza}/>
      <p className='error_fuerza'>{error?.fuerza}</p>
      <label className='form_label' htmlFor='defensa'>Defensa</label>
      <input className='form_input' type="number" id="defensa" onChange={({target:{value}})=>setInput({...input,defensa:value})} value={input.defensa}/>
      <p className='error_defensa'>{error?.defensa}</p>
      <label className='form_label' htmlFor='velocidad'>Velocidad</label>
      <input className='form_input' type="number" id="velocidad" onChange={({target:{value}})=>setInput({...input,velocidad:value})} value={input.velocidad}/>
      <p className='error_defensa'>{error?.velocidad}</p>
      <label className='form_label' htmlFor='altura'>Altura</label>
      <input className='form_input' type="number" id="altura" onChange={({target:{value}})=>setInput({...input,altura:value})} value={input.altura}/>
      <p className='error_defensa'>{error?.altura}</p>
      <label className='form_label' htmlFor='peso'>Peso</label>
      <input className='form_input' type="number" id="peso" onChange={({target:{value}})=>setInput({...input,peso:value})} value={input.peso}/>
      <p className='error_defensa'>{error?.peso}</p>
      <select className='form_select' onChange={({target:{value}})=>{
        if(typeForm.length<=1&&!typeForm.includes(value))
        setTypeForm([...typeForm,value])}}>
        <option key={0}>--Seleccione typo max 2--</option>
        {type.length!==0&&(type.map(({id,name})=><option key={id} value={id}>{name}</option>))}
      </select>
      <ul className='form_lista'>{typeForm.length!==0&& typeForm.map(id=> {
        return <li className='form_item' key={id} >{type.find(({id:idtype})=>idtype==id).name}<button className='form_borrarLista' onClick={(e)=>{
          e.preventDefault();
          setTypeForm(typeForm.filter(ele => ele!=id))
        }}>X</button></li>
      })}</ul>
      <div className='form_contenedor_button'>
      <input type="submit" className='form_button'/>
      <Link to="/home"> <button className='form_button'>Cancelar</button></Link>
      </div>
    </form>
  )
}
