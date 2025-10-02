import './App.css'
import React, { useState } from "react";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-8 transition-all">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-yellow-400">
          📝 Task Manager
        </h1>

     
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="High">🔴 High</option>
            <option value="Medium">🟠 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>

          <button
            onClick={addTask}
            className= "cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white px-6 py-3 rounded-lg transition font-medium"
          >
            Add
          </button>
        </div>

        
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No tasks added yet.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggle={toggleComplete}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


