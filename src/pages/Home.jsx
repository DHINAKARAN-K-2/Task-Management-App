import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskTable from '../components/TaskTable';

const Home = ({ tasks, onDelete }) => {
  const [search, setSearch] = useState('');

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-1/2 text-black"
        />
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Create Task
        </Link>
      </div>

      <TaskTable tasks={filtered} onDelete={onDelete} />
    </div>
  );
};

export default Home;
