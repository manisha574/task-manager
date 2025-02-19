import { useState } from 'react';
import React from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <input 
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <textarea 
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full px-3 py-2 bg-pink-400 text-white rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
