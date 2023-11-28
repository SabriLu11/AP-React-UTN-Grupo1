import React from 'react'
import './ButtonSelect.css'


export const ButtonSelect = ({ onSelectAll }) => {
   
  return (
    <div>
        <button className='ButtonSelect' onClick={() => onSelectAll && onSelectAll()} >
              All
        </button>
    </div>
  )
}
