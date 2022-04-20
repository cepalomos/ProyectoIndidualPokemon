import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link, Outlet} from 'react-router-dom'
import { pokemon_filter } from '../redux/actions/pokemon';
import Filter from './filter';
import Search from './search'

export default function Navigator() {
  const dispatch = useDispatch();
  const [types,setTypes] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/types").then(res=>res.json()).then(json=>setTypes(json));
  },[]);
  function filter(option){
    dispatch(pokemon_filter(option));
  }
  return (
    <>
    <div className='contenedor-principal'>
      <Link to='/create'><button >Crear Pokemon</button></Link>
      <Link to='/home'><button >Home</button></Link>
      <Filter options={types} selectOption={filter} />
      <Search />
    </div>
    <Outlet/>
    </>
  )
}
