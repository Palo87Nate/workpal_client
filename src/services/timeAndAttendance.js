import api from './api';

export const getPresentEmployees = () => {
  return api.get('/presence/${date}');
};

export const getAbsentEmployees = () => {
  return api.get('/absence/${date}');
};

export const clockIn = () => {
  return api.post('/clock-in');
};

export const clockOut = () => {
  return api.post('/clock-out');
};

export const getEmployeeAttendance = () => {
  return api.get('/attendance/${employee_id}');
};
