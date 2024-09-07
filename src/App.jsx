import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Body from './components/Body';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <main className="p-4 mx-10">
        <Body />
        <AddTask onAddTask={addTask} />
        <ToDoList tasks={tasks} onRemoveTask={removeTask} />
      </main>
    </div>
  );
}

export default App;
