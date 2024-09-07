// src/components/AddTask.jsx
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4">
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
