import api from './api';

export const createDepartment = () => {
  return api.post('/departments/new');
};

export const getDepartmentEmployees = () => {
  return api.get('/departments/${department_id}/employees');
};

export const getDepartmentTasks = () => {
  return api.get('/departments/${department_id}/tasks');
};

export const getAllDepartments = () => {
  return api.get('/departments/all');
};

export const getDepartment = () => {
  return api.get('/departments/${department_id}');
};

export const updateDepartment = () => {
  return api.put('/departments/${department_id}');
};
