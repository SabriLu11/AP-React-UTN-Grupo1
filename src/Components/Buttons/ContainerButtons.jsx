import React from 'react'
import './ContainerButtons.css'
import { ButtonSelect } from './ButtonSelect/ButtonSelect'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'
import { useThemeContext } from '../../context/ThemeContext'

export const ContainerButtons = ({ list, onSelectAll, onDeleteAll }) => {
  const { contextTheme } = useThemeContext();

  const themeClass = contextTheme === "Dark" ? "Dark" : "Light";

  return (
    <div className='container-buttons' >
      <span className='list-length' id={`spanNumero${themeClass}`}>Tenés {list.length} {list.length > 1 ? 'tareas' : 'tarea'}</span>

        <ButtonSelect onSelectAll={onSelectAll}/>
        <ButtonDelete onDeleteAll={onDeleteAll}/>
    </div>
  )
}
