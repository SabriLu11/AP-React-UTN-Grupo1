import "./TaskForm.css";

const TaskForm = ({ value, handleAdd, setValue }) => {
    //funcion para agregar con la tecla enter tmb
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="form">
      <button onClick={handleAdd}>
        <img src=".././btn-add.png" alt="add button" />
      </button>
      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Create a new to do"
      />
    </div>
  );
};

export default TaskForm;
