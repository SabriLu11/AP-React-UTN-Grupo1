
import './TaskList.css';
import React from 'react';



const TaskList = ({ tarea, handleDelete, setValue }) => {
    return (
        <div className='listaTask '>
            <li>
                <button className='btn' onClick={handleDelete}>
                    <img src='.././radio.png' alt='add button' />
                </button>

                <span className='task'>{tarea}</span>

                <button className='btn' onClick={handleDelete}>
                    <img src='.././bin.png.png' alt='remove task' />
                </button>
            </li>
        </div>
    );
};



export default TaskList;


