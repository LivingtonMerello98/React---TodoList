import React from "react";

function ToDoItem() {
    return (
        <li className="flex justify-between items-center p-2 bg-gray-800 text-white rounded mb-2">
            {task}
            <button
                onClick={onRemove}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
                Remove
            </button>
        </li>
    )
}