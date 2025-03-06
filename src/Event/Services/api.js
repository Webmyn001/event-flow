import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const createTask = async (taskData, token) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const getTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const updateTask = async (taskId, taskData, token) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const deleteTask = async (taskId, token) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};