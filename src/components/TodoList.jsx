// src/components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';
import { useTaskContext } from '../store'; // Importiamo il nostro hook personalizzato

function ToDoList() {
    const { tasks, removeTask } = useTaskContext(); // Otteniamo tasks e removeTask dal contesto

    return (
        <div className="mt-4">
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} onRemove={() => removeTask(index)} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
