import React from 'react';
import ToDoItem from './ToDoItem';
import { useTaskContext } from '../store';

function List() {
    const { tasks, removeTask } = useTaskContext();

    return (
        <div className="mt-4 scroll-container">
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} onRemove={() => removeTask(index)} />
                ))}
            </ul>
        </div>
    );
}
export default List;
