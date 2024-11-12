// src/components/ToDoItem.jsx
import React from 'react';

function ToDoItem({ task, onRemove }) {
    return (
        <li className="flex justify-between items-center p-2 text-white rounded mb-2 bg-gray-600">
            <div>
                <span className="font-bold">{task.task}</span>  {/* Nome della task */}
                <span className="text-sm text-gray-300 ml-2">({task.category})</span>  {/* Categoria */}
            </div>
            <button
                onClick={onRemove}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
                Remove
            </button>
        </li>
    );
}

export default ToDoItem;
