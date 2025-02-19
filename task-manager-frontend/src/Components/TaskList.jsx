import TaskItem from './TaskItem';
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </div>
  );
};

export default TaskList;
