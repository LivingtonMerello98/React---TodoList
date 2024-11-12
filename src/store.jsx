import React, { createContext, useState, useContext } from 'react';

// Creazione del contesto
const TaskContext = createContext();

// Definizione del provider
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

// Hook personalizzato per l'accesso al contesto
export const useTaskContext = () => useContext(TaskContext);
