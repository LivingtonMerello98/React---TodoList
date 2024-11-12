// src/App.jsx
import React from 'react';
import { TaskProvider } from './store'; // Importiamo il provider
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';

function App() {
  return (
    // Wrapping con il provider
    <TaskProvider>
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-700 to-gray-900">
        <main className="p-4 mx-4 container w-full md:w-6/12">
          <AddTask />
          <ToDoList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
