import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="p-5 bg-gray-50 border border-green-300 rounded-lg shadow-sm flex flex-col md:flex-row md:justify-between md:items-center transition transform hover:scale-105">
      <div className="mb-4 md:mb-0">
        <h3 className={`text-xl font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        {task.description && <p className="text-gray-600 mt-1">{task.description}</p>}
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onToggle(task.id)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
