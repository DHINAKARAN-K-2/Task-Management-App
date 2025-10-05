import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400 text-lg">No tasks added yet.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
