import api from './api';

export const createTask = () => {
  return api.post('/tasks/new');
};

export const getAllTasks = () => {
  return api.get('/tasks/all');
};

export const getTask = () => {
  return api.get('/tasks/${task_id}');
};

export const updateTask = () => {
  return api.put('/tasks/${task_id}');
};

export const deleteTask = () => {
  return api.delete('/tasks/${task_id}');
};
