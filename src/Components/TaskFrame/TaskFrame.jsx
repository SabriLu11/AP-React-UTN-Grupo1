import "./TaskFrame.css";
import TaskList from "../TaskList/TaskList";
import { useThemeContext } from "../../context/ThemeContext";
import { useState } from "react";
import { useEffect } from "react";
import { ContainerButtons } from "../Buttons/ContainerButtons";
import Swal from 'sweetalert2';

const TaskFrame = ({ list, setList, handleDelete, setValue }) => {
  //Si la lista de tareas está vacía
  const [noTask, setNoTask] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (list.length === 0) {
      setNoTask("Aún no hay tareas para hoy!");
    } else {
      setNoTask("");
    }
  }, [list]);

  //funcion para manejar la sección de todas las tareas
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleDeleteAll=()=>{
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Vas a eliminar todas las tareas y no podrás recuperarlas",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#77CA42",
      cancelButtonColor: "#DF4631",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar todas"
    }).then((result) => {
      if (result.isConfirmed) {
        setList([]);
        Swal.fire({
          title: "¡Día libre!",
          text: "Se eliminaron todas las tareas correctamente",
          icon: "success"
        });
        
      }
    });
  
  }

  //manejo del tema
  const { contextTheme } = useThemeContext();
  const themeClass = contextTheme === "Dark" ? "Dark" : "Light";
  return (
    <>
      <table className="frame" id={`list${themeClass}`}>
        {noTask ? (
          <div className="notask">
            <p>{noTask}</p>
          </div>
        ) : (
          list.map((tarea, index) => (
            <tr key={index}>
              <TaskList
                tarea={tarea}
                handleDelete={() => handleDelete(tarea)}
                setValue={setValue}
                selectAll={selectAll}
              />
              <div className="taskSeparator" />
            </tr>
          ))
        )}

        <tr className="buttonsFrame" id={`list${themeClass}`}></tr>
        {list.length > 0 && (
          <ContainerButtons
            list={list}
            onSelectAll={handleSelectAll}
            onDeleteAll={handleDeleteAll}
            selectAll={selectAll}
          />
        )}
      </table>
    </>
  );
};

export default TaskFrame;
