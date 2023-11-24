import './TaskFrame.css';
import TaskList from '../TaskList/TaskList'

const TaskFrame = ({ list, handleDelete, setValue }) => {
    return (
        <>
            < table className="frame" >
                {
                    list.map((tarea, index) => (
                        <tr>
                            <TaskList
                                key={index}
                                tarea={tarea}
                                handleDelete={() => handleDelete(tarea)}
                                setValue={setValue}
                            />
                            <div className="taskSeparator" />
                        </tr>
                    ))
                }

                <tr className='buttonsFrame'>
                    <span>botones</span>
                </tr>
            </table >
        </>
    );
};

export default TaskFrame;