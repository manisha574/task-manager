import API from './api';

export const fetchTasks = async () => {
  return await API.get('/tasks');
};

export const createTask = async (taskData) => {
  return await API.post('/tasks', taskData);
};

export const updateTask = async (id, taskData) => {
  return await API.put(`/tasks/${id}`, taskData);
};

export const deleteTask = async (id) => {
  return await API.delete(`/tasks/${id}`);
};
