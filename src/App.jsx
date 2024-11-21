import React, { useState, useEffect } from 'react';
import { TaskProvider } from './store';
import AddTask from './components/AddTask';
import List from './components/List';
import SplashPage from './components/SplashPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Nascondi la splash page dopo 3 secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); // Pulizia del timer
  }, []);

  return (
    <TaskProvider>
      {showSplash ? (
        <SplashPage />
      ) : (
        <div className="flex justify-center items-center liquid-bg">
          <main className="p-4 mx-4 container w-full md:w-6/12">
            <AddTask />
            <List />
          </main>
        </div>
      )}
    </TaskProvider>
  );
}

export default App;

