import './TaskFrame.css';
import TaskList from '../TaskList/TaskList'
import { useThemeContext } from '../../context/ThemeContext';

const TaskFrame = ({ list, handleDelete, setValue }) => {
    //manejo del tema
    const {contextTheme} = useThemeContext()
    const themeClass = contextTheme === 'Dark' ? 'Dark' : 'Light';
    return (
        <>
            <table className='frame' id={`list${themeClass}`}>
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
            </table>
        </>
    );
};

export default TaskFrame;