import { useThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./TaskList.css";

const TaskList = ({
  tarea,
  handleDelete,

  selectAll,
}) => {
  //manejo del tema
  const { contextTheme } = useThemeContext();

  const themeClass = contextTheme === "Dark" ? "Dark" : "Light";

  //para tachar el texto de la task completada
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(selectAll);
  }, [selectAll]);

  return (
    <div className="containerlistaTask " id={`formImput${themeClass}`}>
      <li>
        <div className="listTask">
          <button className="btn">
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </button>

          <span
            className="task"
            id={`span${themeClass}`}
            //ternario para agregar la linea que tacha si isChecked es true
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            {tarea}
          </span>

          <button className="btn" onClick={handleDelete}>
            <FaTrashAlt
              size={20}
              className="iconTrash"
              id={`iconTrash${themeClass}`}
            />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskList;
