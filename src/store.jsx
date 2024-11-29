import React, { createContext, useState, useContext, useEffect } from 'react';

// Creazione del contesto per la gestione dei task
const TaskContext = createContext();

// Funzione per caricare i task salvati nel localStorage
const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

// Funzione per salvare i task nel localStorage
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Provider che gestisce lo stato dei task e lo rende accessibile a tutti i componenti
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(loadTasksFromLocalStorage()); // Carica i task dal localStorage

    // Effetto per salvare i task nel localStorage ogni volta che cambiano
    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    // Funzione per aggiungere un nuovo task
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    // Funzione per rimuovere un task
    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

// Hook per utilizzare il contesto dei task
export const useTaskContext = () => useContext(TaskContext);
