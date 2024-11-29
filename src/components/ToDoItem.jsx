import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToDoItem({ task, onRemove }) {

    // Funzione per determinare il colore della categoria
    const getCategoryColor = (category) => {
        switch (category) {
            case 'work':
                return 'bg-sky-500 text-white';
            case 'fun':
                return 'bg-pink-500 text-white';
            case 'personal':
                return 'bg-emerald-400 text-white';
            default:
                return 'bg-gray-300 text-gray-700';
        }
    };

    // Funzione per determinare il colore del periodo di tempo
    const getTimeColor = (time) => {
        switch (time) {
            case 'morning':
                return 'bg-yellow-400 text-gray-800';
            case 'afternoon':
                return 'bg-orange-500 text-white';
            case 'evening':
                return 'bg-indigo-800 text-white';
            default:
                return 'bg-gray-300 text-gray-700';
        }
    };

    return (
        <li className={`glass-card flex justify-between items-center p-2 text-white rounded mb-2 w-full`}>
            <div className='flex w-full'>
                <div className='item-field'>
                    <p className="text-sm text-white text-bold">{task.task}</p>
                </div>
                <div className='flex items-center button-field'>
                    <span className={`text-xs ml-2 ${getCategoryColor(task.category)} text-white rounded px-2 py-1 w-label text-center`}>
                        {task.category}
                    </span>
                    <span className={`text-xs ml-2 ${getTimeColor(task.time)} text-white rounded px-2 py-1 w-label text-center`}>
                        {task.time}
                    </span>

                    <button onClick={onRemove} className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded w-fit mx-2 text-sm flex items-center'>
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ToDoItem;
