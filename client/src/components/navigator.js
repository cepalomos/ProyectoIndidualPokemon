import {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import Search from './search'

export default function Navigator() {

  return (
    <>
    <div className='contenedor-principal'>
      <Link to='/create'><button >Crear Pokemon</button></Link>
      <Link to='/home'><button >Home</button></Link>
      
      <Search />
    </div>
    <Outlet/>
    </>
  )
}
