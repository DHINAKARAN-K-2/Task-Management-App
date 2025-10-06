import { useState, useEffect } from 'react';

const defaultValues = {
  title: '',
  description: '',
  priority: 'Medium',
};

const useTaskForm = (initialValues = {}) => {
  const [formData, setFormData] = useState({ ...defaultValues, ...initialValues });

  useEffect(() => {
    // Only update if initialValues actually has data
    if (Object.keys(initialValues).length > 0) {
      setFormData({ ...defaultValues, ...initialValues });
    }
  }, [JSON.stringify(initialValues)]); // stringified for shallow comparison

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange, setFormData };
};

export default useTaskForm;
