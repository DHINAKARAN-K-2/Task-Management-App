import { Link } from 'react-router-dom';

const TaskTable = ({ tasks, onDelete }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700">
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Priority</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="3" className="p-4 text-center text-gray-500">
              No tasks found.
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr key={task.id} className="border-t border-gray-300 dark:border-gray-600">
              <td className="p-2">{task.title}</td>
              <td className={`p-2 ${task.priority=== "High"?"text-red-600":`${task.priority=== "Low"?"text-green-400":"text-orange-400"}`}`}>{task.priority}</td>
              <td className="p-2 space-x-2">
                <Link to={`/edit/${task.id}`} className="bg-blue-600 px-2 py-1 border rounded-md ">
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(task.id)}
                  className="bg-red-600 px-2 py-1 border rounded-md "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
