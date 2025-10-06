import React from 'react';

const TaskForm = ({ formData, handleChange, onSubmit, isEdit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded bg-white dark:bg-gray-800"
        >
          <option value="High">🔴High</option>
          <option value="Medium">🟠Medium</option>
          <option value="Low">🟢Low</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {isEdit ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
