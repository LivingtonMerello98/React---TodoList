import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ToDoItem({ task, onRemove }) {

    const getCategoryColor = (category) => {
        switch (category) {
            case 'work':
                return 'bg-sky-600';  // Cambiato in blu
            case 'fun':
                return 'bg-teal-600'; // Cambiato in teal
            case 'gym':
                return 'bg-teal-500'; // Cambiato in teal
            default:
                return 'bg-gray-600';
        }
    };

    const getTimeColor = (time) => {
        switch (time) {
            case 'morning':
                return 'bg-yellow-600';
            case 'afternoon':
                return 'bg-orange-600';
            case 'evening':
                return 'bg-purple-600';
            default:
                return 'bg-gray-600';
        }
    };

    return (
        <li className={`flex justify-between items-center p-2 text-white rounded mb-2 bg-indigo-950 bg-gradient-to-r from-indigo-900 to-teal-900`}>
            <div className='flex w-full'>
                <div className='item-field'>
                    <p className="text-sm text-white text-bold">{task.task}</p>
                </div>

                <div className='flex items-center button-field '>
                    <span className={`text-xs ml-2 ${getCategoryColor(task.category)} text-white rounded px-2 py-1 w-label text-center`}>
                        {task.category}
                    </span>
                    <span className={`text-xs ml-2 ${getTimeColor(task.time)} text-white rounded px-2 py-1 w-label text-center`}>
                        {task.time}
                    </span>

                    <button
                        onClick={onRemove}
                        className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded w-fit mx-2 text-sm flex items-center'
                    >
                        <FontAwesomeIcon icon="trash" />
                    </button>


                </div>
            </div>
        </li>
    );
}

export default ToDoItem;
