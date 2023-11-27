import React from 'react'
import './ContainerButtons.css'
import { ButtonSelect } from './ButtonSelect/ButtonSelect'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'

export const ContainerButtons = ({ list }) => {
  return (
    <div className='container-buttons'>
      <span className='list-length'>Tenés {list.length}</span>

        <ButtonSelect />
        <ButtonDelete />
    </div>
  )
}
