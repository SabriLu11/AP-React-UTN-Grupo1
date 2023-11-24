import { useThemeContext } from '../../context/ThemeContext';
import './TaskForm.css';

const TaskForm = ({ value, handleAdd, setValue }) => {
    //manejo del tema
    const {contextTheme} = useThemeContext()
    const themeClass = contextTheme === 'Dark' ? 'Dark' : 'Light';

    return (
    <div className= {`form ${themeClass}`} >
        <button onClick={handleAdd}> 
            <img src='.././btn-add.png' alt='add button' />
        </button>
        <input className= {`form ${themeClass}`} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new to do'/>
    </div>    
    );
  };

  export default TaskForm;