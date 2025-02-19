import React, { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';
import { fetchTasks, createTask, updateTask, deleteTask } from '../Services/taskService';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch tasks on mount (from the backend)
  useEffect(() => {
    const getTasks = async () => {
      setLoading(true);
      try {
        const response = await fetchTasks();
        // Format tasks as needed (e.g., mapping _id to id)
        const formattedTasks = response.data.map(task => ({
          id: task._id,
          title: task.title,
          description: task.description,
          completed: task.completed
        }));
        setTasks(formattedTasks);
      } catch (err) {
        setError(err.response?.data.message || err.message);
      }
      setLoading(false);
    };

    getTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      const response = await createTask(task);
      const newTask = {
        id: response.data._id,
        title: response.data.title,
        description: response.data.description,
        completed: response.data.completed,
      };
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleTask = async (id) => {
    const taskToToggle = tasks.find(task => task.id === id);
    if (!taskToToggle) return;
    try {
      const updatedData = { ...taskToToggle, completed: !taskToToggle.completed };
      const response = await updateTask(id, updatedData);
      const updatedTask = {
        id: response.data._id,
        title: response.data.title,
        description: response.data.description,
        completed: response.data.completed,
      };
      setTasks(prev =>
        prev.map(task => (task.id === id ? updatedTask : task))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-pink-100 animate-gradient flex flex-col items-center py-8">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Dashboard</h2>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6">
        <TaskForm onSubmit={handleAddTask} />
        {loading ? (
          <p className="text-center text-gray-500 mt-4">Loading tasks...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-4">{error}</p>
        ) : (
          <div className="mt-6">
            <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
