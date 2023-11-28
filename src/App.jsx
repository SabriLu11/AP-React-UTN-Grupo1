import { useState } from "react";
import { useThemeContext } from "./context/ThemeContext";
import MyDate from "./Components/Date/MyDate";
import TaskForm from "./Components/TaskForm/TaskForm";
import ReactSwitch from "react-switch";

import swal from 'sweetalert';
import "./App.css";
import TaskFrame from "./Components/TaskFrame/TaskFrame";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  

  //manejo del estado del tema
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };



  //funciones para manejar los botones
  const handleAdd = () => {    
    if (value.trim() !== ""){
      setList([...list, value]);
      setValue("");
    } else{
      //alerta
     swal({
      title: "Tarea vacía",
      text: "No es posible agregar una tarea vacía",
      icon: "error",
      button: "Ok!",
      timer: 2500,
     });
    }
  };
// funcion para borrar una tarea
  const handleDelete = (tarea) => {
    setList(list.filter((x) => x !== tarea));
  };

  return (
    <>
      <div className="containerApp" id={contextTheme}>
      <h1 id="title">MY TO-DO LIST</h1>

        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          onColor="#9093C3"
          onHandleColor="#24273d"
          handleDiameter={30}
          uncheckedIcon={true}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
         
          className="react-switch"
          id="material-switch"
        />

        <div className="headerForm" id={`form${contextTheme}`}>
          <MyDate />
          <TaskForm value={value} handleAdd={handleAdd} setValue={setValue}/>
        </div>
        
        <TaskFrame list={list} handleDelete={handleDelete} setValue={setValue} setList={setList}  />
      </div>
    </>
  );

   
}
export default App;
