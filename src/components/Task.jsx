const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg border ${
        task.completed ? "bg-green-100 dark:bg-green-900 line-through" : "bg-gray-50 dark:bg-gray-800"
      } border-gray-200 dark:border-gray-700 transition`}
    >
      <div>
        <p className="font-medium text-gray-800 dark:text-gray-200">{task.text}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{task.priority} Priority</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="text-sm px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
