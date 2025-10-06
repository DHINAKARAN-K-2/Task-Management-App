import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useTaskForm from '../hooks/useTaskForm';
import TaskForm from '../components/TaskForm';

const EditTask = ({ tasks, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existing = tasks.find((t) => t.id === id);
  if (!existing) {
    return <p>Task not found.</p>;
  }

  const { formData, handleChange } = useTaskForm(existing);

  const handleEdit = (updated) => {
    onUpdate(id, updated);
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
      <TaskForm
        formData={formData}
        handleChange={handleChange}
        onSubmit={handleEdit}
        isEdit={true}
      />
    </div>
  );
};

export default EditTask;
