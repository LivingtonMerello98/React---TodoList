import React, { useState } from 'react';
import { useTaskContext } from '../store';

function AddTask() {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('work');
    const [time, setTime] = useState('morning');
    const { addTask } = useTaskContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            // Aggiungiamo il task con la categoria e l'orario
            addTask({ task: task.trim(), category, time });
            setTask('');
            setTime('morning');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 w-full">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full md:w-auto flex-1 py-2 px-2 border border-white rounded input-class text-sm"
                placeholder="Add a new task"
            />
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select py-2 px-2 border rounded text-white w-full sm:w-48"
                >
                    <option value="work">Work</option>
                    <option value="fun">Fun</option>
                    <option value="personal">Personal</option>
                </select>

                <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="select py-2 px-2 border rounded text-white w-full sm:w-48"
                >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>

            <button type="submit" className="w-full md:w-auto bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded text-l mt-4 sm:mt-0 font-bold">
                +
            </button>
        </form>
    );
}

export default AddTask;
