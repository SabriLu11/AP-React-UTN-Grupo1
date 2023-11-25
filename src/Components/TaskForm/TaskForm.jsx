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
      handleAdd();
    }
  };
    return (
    <div className= 'form' id={`formImput${themeClass}`} >
        <button onClick={handleAdd}> 
        <IoAddCircleOutline  className='iconAdd' id={`iconAdd${themeClass}`} onKeyDown={handleKeyDown}/>
        </button>
        <input className= 'form' id={`formImput${themeClass}`}  value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new to do'/>
    </div>    
    );
  };

  export default TaskForm;
