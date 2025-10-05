const TaskForm = ({ taskText, setTaskText, priority, setPriority, addTask }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="What do you need to do?"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition w-full"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white transition"
      >
        <option value="High">🔴 High</option>
        <option value="Medium">🟠 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <button
        onClick={addTask}
        className="cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br text-white px-6 py-3 rounded-lg transition font-medium"
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
