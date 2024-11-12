import React from 'react';

function ToDoItem({ task, onRemove }) {

    const getCategoryColor = (category) => {
        switch (category) {
            case 'work':
                return 'bg-indigo-700';
            case 'fun':
                return 'bg-gray-500';
            case 'gym':
                return 'bg-teal-600';
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
        <li className={`flex justify-between items-center p-2 text-white rounded mb-2 bg-gray-700`}>
            <div>
                <span className="text-sm">{task.task}</span>
                <span className={`text-xs ml-2 ${getCategoryColor(task.category)} text-white rounded px-2 py-1`}>
                    {task.category}
                </span>
                <span className={`text-xs ml-2 ${getTimeColor(task.time)} text-white rounded px-2 py-1`}>
                    {task.time}
                </span>
            </div>
            <button
                onClick={onRemove}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
                -
            </button>
        </li>
    );
}

export default ToDoItem;
