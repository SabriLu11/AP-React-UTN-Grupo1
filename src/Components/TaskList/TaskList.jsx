import { useThemeContext } from "../../context/ThemeContext";
import { FaTrashAlt } from "react-icons/fa";
import "./TaskList.css";
import React from "react";

const TaskList = ({ tarea, handleDelete, setValue }) => {
  //manejo del tema
  const { contextTheme } = useThemeContext();

  const themeClass = contextTheme === "Dark" ? "Dark" : "Light";

  return (
  
      <div className="containerlistaTask " id={`formImput${themeClass}`}>
        <li>
          <div className="listTask">
            <button className="btn">
              <input type="checkbox" className="checkbox" />
            </button>

            <span className="task" id={`span${themeClass}`}>
              {tarea}
            </span>

            <button className="btn" onClick={handleDelete}>
                <FaTrashAlt size={20} className='iconTrash' id={`iconTrash${themeClass}`}/>
            </button>
          </div>
        </li>

        
      </div>
      
  
  );
};

export default TaskList;
