import React, { createContext, useState, useContext, useEffect } from 'react';

// Creazione del contesto
const TaskContext = createContext();

// Funzione per caricare i task dal localStorage
const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

// Funzione per salvare i task nel localStorage
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Definizione del provider
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(loadTasksFromLocalStorage()); // Carica i task dal localStorage

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

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

export const useTaskContext = () => useContext(TaskContext);
