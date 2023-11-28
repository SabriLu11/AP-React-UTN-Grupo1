import { useThemeContext } from "../../context/ThemeContext";

import "./TaskList.css";


const TaskList = ({ tarea, handleDelete, setValue, selected ,oneSelect, handleCheckboxChange }) => {
  //manejo del tema
  const { contextTheme } = useThemeContext();
 
  const themeClass = contextTheme === "Dark" ? "Dark" : "Light";
  

  return (
  
      <div className="containerlistaTask " id={`formImput${themeClass}`}>
        <li>
          <div className="listTask">
            <button className="btn">
              <input 
              type="checkbox" 
              className="checkbox" 
              checked={selected || oneSelect} 
              onChange={() => handleCheckboxChange(tarea)}/>
            </button>

            <span className="task" id={`span${themeClass}`}>
              {tarea}
            </span>

            <button className="btn" onClick={handleDelete}>
              <img src=".././bin.png.png" alt="remove task" />
            </button>
          </div>
        </li>

        
      </div>
      
  
  );
};

export default TaskList;
