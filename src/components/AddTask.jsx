// src/components/AddTask.jsx
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        //il metodo trim() rimuove gli spazi
        if (task.trim()) {
            console.log(`segnaposto ${task.trim()}`)
            onAddTask(task);

            setTask('');

        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4 w-6/12 bg-blue-300">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Add a new task"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}

export default AddTask;
