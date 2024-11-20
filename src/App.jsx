import React from 'react';
import { TaskProvider } from './store';
import AddTask from './components/AddTask';
import List from './components/List';

function App() {
  return (
    <TaskProvider>
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-700 to-gray-900">
        <main className="p-4 mx-4 container w-full md:w-6/12">
          <AddTask />
          <List />
        </main>
      </div>
    </TaskProvider>
  );
}
export default App;
