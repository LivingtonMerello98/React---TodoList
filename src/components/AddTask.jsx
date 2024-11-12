import React, { useState } from 'react';
import { useTaskContext } from '../store'; // Importiamo il nostro hook personalizzato

function AddTask() {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('lavoro'); // Aggiungiamo la categoria
    const { addTask } = useTaskContext(); // Otteniamo la funzione addTask dal contesto

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            // Aggiungiamo il task con la categoria al contesto
            addTask({ task: task.trim(), category });
            setTask(''); // Reset della casella di input
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4 w-full">
            {/* Campo input per il task */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 py-2 px-2 border rounded bg-gray-500 input-class text-sm"
                placeholder="Add a new task"
            />

            {/* Select per la categoria */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="py-1 px-2 border rounded bg-gray-500 text-white"
            >
                <option value="lavoro">Lavoro</option>
                <option value="svago">Svago</option>
                <option value="esercizio">Esercizio</option>
            </select>

            {/* Bottone per inviare il form */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-xs">
                Add
            </button>
        </form>
    );
}

export default AddTask;
