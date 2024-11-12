import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Header from './components/Header';
// import Body from './components/Body';
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
    <div className='flex justify-center items-center bg-gradient-to-b from-gray-700 to-gray-900 '>
      <main className="p-4 mx-10 container w-6/12">
        {/* search-Bar and input */}
        <AddTask onAddTask={addTask} />

        <ToDoList tasks={tasks} onRemoveTask={removeTask} />
      </main>
    </div>
  );
}

export default App;
