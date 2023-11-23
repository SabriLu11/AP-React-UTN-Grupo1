import { useState } from 'react';
import './App.css';
import MyDate from './Components/Date/MyDate';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {

    const [list, setList] = useState([])
    const [value, setValue] = useState()


    //funciones para manejar los botones
    const handleAdd = () => {
        setList([...list, value])
        setValue("")
        console.log(value)
        console.log(list)
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
                {
                    list.map((tarea, index) => (
                        
                        <TaskList
                            key={index}
                            tarea={tarea}
                            handleDelete={() => handleDelete(tarea)}
                        />
                    ))
                }

            </div>
        </>
    );
}


export default App;
