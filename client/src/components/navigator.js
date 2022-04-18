import React from 'react'
import {Outlet} from 'react-router-dom'

export default function Navigator() {
  return (
    <>
    <div>Navigator</div>
    <Outlet/>
    </>
  )
}
