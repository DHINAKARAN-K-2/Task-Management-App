import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <h1 className="text-2xl font-bold">📝 Task Manager</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="p-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home tasks={tasks} onDelete={(id) => setTasks(tasks.filter(t => t.id !== id))} />} />
            <Route path="/create" element={<CreateTask onSubmit={(task) => setTasks([ { ...task, id: Date.now().toString() }, ...tasks ])} />} />
            <Route path="/edit/:id" element={<EditTask tasks={tasks} onUpdate={(id, updated) => setTasks(tasks.map(t => t.id === id ? { ...t, ...updated } : t))} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
