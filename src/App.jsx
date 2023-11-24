import { useState } from 'react';
import './App.css';
import MyDate from './Components/Date/MyDate';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskFrame from './Components/TaskForm/TaskFrame';

function App() {

    const [list, setList] = useState([])
    const [value, setValue] = useState()


    //funciones para manejar los botones
    const handleAdd = () => {
        setList([...list, value])
        setValue("")
    }

    const handleDelete = (tarea) => {
        setList(list.filter(x => x !== tarea))
    }

    return (
        <>
            <div className="containerApp">
                <div className="headerForm">
                    <MyDate />
                    <TaskForm value={value} handleAdd={handleAdd} setValue={setValue} />
                </div>
                <hr />
                <TaskFrame list={list} handleDelete={handleDelete} setValue={setValue} />
            </div>
        </>
    );
}


export default App;
