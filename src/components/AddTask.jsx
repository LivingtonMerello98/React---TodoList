import React, { useState } from 'react';
import '../App.css';

function AddTask({ onAddTask }) {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('lavoro'); // Stato per la categoria selezionata

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            // Passiamo la task e la categoria all'oggetto della nuova task
            onAddTask({ task: task.trim(), category });

            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4 w-full">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 py-1 px-2 border rounded bg-gray-500 input-class"
                placeholder="Add a new task"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="py-1 px-2 border rounded bg-gray-500 border-gray-600 text-white select"
            >
                <option value="lavoro">Lavoro</option>
                <option value="svago">Svago</option>
                <option value="esercizio">Esercizio</option>
            </select>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-xs"
            >
                Add
            </button>
        </form>
    );
}

export default AddTask;
