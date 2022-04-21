import React from 'react';
import '../css/pagination.css';

export default function Pagination({pages,currentPage}) {
  return (
    <ul className='pagination_list'>
        {pages.map(number=>(<li  key={number} ><button className='pagination_item' onClick={(e)=>currentPage(number,e)}>{number}</button></li>))}
    </ul>
  )
}
