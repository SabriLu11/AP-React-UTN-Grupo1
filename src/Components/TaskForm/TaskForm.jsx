import './TaskForm.css';

const TaskForm = ({ value, handleAdd, setValue}) => {
    return (
        <div className="form">
            <button onClick={handleAdd}>
                <img src='.././btn-add.png' alt='add button' />
            </button>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new to do' />
        </div>
    );
};

export default TaskForm;