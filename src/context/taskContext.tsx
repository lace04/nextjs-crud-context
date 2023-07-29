'use client';

import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/interfaces/task.interface';

const taskContext = createContext<{
  tasks: Task[];
  createTask: (task: Task) => void;
  updatedTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
}>({
  tasks: [],
  createTask: () => {},
  updatedTask: () => {},
  deleteTask: () => {},
});

//hook
export const useTask = () => {
  const context = useContext(taskContext);
  if (!context) {
    throw new Error('useTask must be used within a TasksProvider');
  }
  return context;
};

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    // implementation goes here
  };

  const createTask = async (task: Task) => {
    const { title, description } = task;
    setTasks([...tasks, { title, description, id: uuidv4() }]);
  };

  const updatedTask = async (id: string, task: Task) => {
    const updateTasks = tasks.map((t) => (t.id === id ? { ...task, id } : t));
    setTasks(updateTasks);
  };

  const deleteTask = async (id: string) => {
    const deleteTasks = tasks.filter((t) => t.id !== id);
    setTasks(deleteTasks);
  };

  return (
    <taskContext.Provider
      value={{ tasks, createTask, updatedTask, deleteTask }}
    >
      {children}
    </taskContext.Provider>
  );
};
