import React from 'react'
import './ContainerButtons.css'
import { ButtonSelect } from './ButtonSelect/ButtonSelect'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'

export const ContainerButtons = ({ list, onSelectAll }) => {
  return (
    <div className='container-buttons'>
      <span className='list-length'>Tenés {list.length} {list.length > 1 ? 'tareas' : 'tarea'}</span>

        <ButtonSelect onSelectAll={onSelectAll}/>
        <ButtonDelete />
    </div>
  )
}
