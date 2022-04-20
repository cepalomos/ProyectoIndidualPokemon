import React from 'react'

export default function Pagination({pages,currentPage}) {
  return (
    <ul>
        {pages.map(number=>(<li key={number} ><button onClick={(e)=>currentPage(number,e)}>{number}</button></li>))}
    </ul>
  )
}
