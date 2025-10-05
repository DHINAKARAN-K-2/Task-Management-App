// App.jsx
import './App.css'
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [darkMode, setDarkMode] = useState(false); // 🌙 Dark mode state

  const addTask = () => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority,
    };

    setTasks([newTask, ...tasks]);
    setTaskText("");
    setPriority("Medium");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen transition`}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 p-4 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-xl p-6 sm:p-8 transition-all">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">📝 Task Manager</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <TaskForm
            taskText={taskText}
            setTaskText={setTaskText}
            priority={priority}
            setPriority={setPriority}
            addTask={addTask}
          />

          <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
