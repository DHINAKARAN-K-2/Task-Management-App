import React from "react";

const getPriorityColor = (priority) =>
  priority === "High" ? "bg-red-500" : priority === "Medium" ? "bg-yellow-400" : priority === "Low" ? "bg-green-500" : "bg-gray-400";

function Task({ task, onToggle, onDelete }) {
  return (
    <div
      className={`flex justify-between items-center border px-4 py-3 rounded-lg shadow-sm transition hover:shadow-md ${
        task.completed ? "bg-gray-100 text-gray-500 line-through" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />
        <span className="text-lg">{task.text}</span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`text-white text-xs font-semibold px-2 py-1 rounded-full ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 cursor-pointer hover:text-red-700 text-xl transition"
          title="Delete Task"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Task;
