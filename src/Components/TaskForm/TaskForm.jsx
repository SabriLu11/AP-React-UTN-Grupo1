import { useThemeContext } from '../../context/ThemeContext';
import { IoAddCircleOutline } from "react-icons/io5";
import './TaskForm.css';
import "./TaskForm.css";

const TaskForm = ({ value, handleAdd, setValue }) => {

    //manejo del tema
    const {contextTheme} = useThemeContext()
    const themeClass = contextTheme === 'Dark' ? 'Dark' : 'Light';


    //funcion para agregar con la tecla enter tmb
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); //elimina salto de línea al apretar enter
        handleAdd();
      }
    };

    return (
    <div className= 'form' id= {`formImput${themeClass}`} >
        <button onClick={handleAdd}> 
        <IoAddCircleOutline  className='iconAdd' id={`iconAdd${themeClass}`} />
        </button>
        <input className= 'form' id={`formImput${themeClass}`}  value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new to do' onKeyDown={handleKeyDown}/>
    </div>    
    );
  };

  export default TaskForm;
