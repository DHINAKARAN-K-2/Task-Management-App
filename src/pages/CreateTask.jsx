import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTaskForm from '../hooks/useTaskForm';
import TaskForm from '../components/TaskForm';

const CreateTask = ({ onSubmit }) => {
  const { formData, handleChange } = useTaskForm();
  const navigate = useNavigate();

  const handleCreate = (task) => {
    onSubmit(task);
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
      <TaskForm formData={formData} handleChange={handleChange} onSubmit={handleCreate} />
    </div>
  );
};

export default CreateTask;
