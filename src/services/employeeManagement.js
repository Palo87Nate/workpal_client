import api from './api';

export const createEmployee = () => {
  return api.post('/employees/new');
};

export const updateEmployee = () => {
  return api.put('/employees/${employee_id}');
};

export const getEmployeeTasks = () => {
  return api.get('/employees/${employee_id}/tasks');
};

export const getEmployeeContact = () => {
  return api.get('/employees/${employee_id}/contact');
};

export const getAllEmployees = () => {
  return api.get('/employees/all');
};

export const getEmployee = () => {
  return api.get('/employees/${employee_id}');
};