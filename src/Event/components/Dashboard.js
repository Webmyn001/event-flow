import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../Services/api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks(token);
      setTasks(tasks);
    };

    fetchTasks();
  }, [token]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ title, description, dueDate }, token);
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const updatedTask = await updateTask(editTaskId, { title, description, dueDate }, token);
    setTasks(tasks.map((task) => (task._id === editTaskId ? updatedTask : task)));
    setEditTaskId(null);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId, token);
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditTaskId(task._id);
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <form onSubmit={editTaskId ? handleUpdateTask : handleCreateTask}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Due Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg"
          >
            {editTaskId ? 'Update Task' : 'Create Task'}
          </button>
        </form>
        <h3 className="text-xl font-bold mt-8 mb-4">Tasks</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className="mb-4 p-4 border border-gray-300 rounded-lg">
              <h4 className="text-lg font-bold">{task.title}</h4>
              <p>{task.description}</p>
              <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
              <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
              <button
                className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                onClick={() => handleEditTask(task)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-lg"
                onClick={() => handleDeleteTask(task._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;