import React from "react";

import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onRemoveTask }) {
    return (
        <div className="mt-4">
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} onRemove={() => onRemoveTask(index)} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;