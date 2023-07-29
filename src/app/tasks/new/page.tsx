'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTask } from '@/context/taskContext';
import { BiSave } from 'react-icons/bi';

const TaskFormPage = () => {
  const { createTask, updatedTask, tasks } = useTask();

  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      updatedTask(id, task);
    } else {
      createTask(task);
    }
    router.push('/');
  };

  useEffect(() => {
    if (id) {
      const taskFound = tasks.find((task) => task.id === id);
      if (taskFound) {
        setTask({ title: taskFound.title, description: taskFound.description });
      }
    }
  }, []);

  return (
    <div className=''>
      <h1 className='text-center text-4xl font-extralight mt-10'>
        {id ? 'Edit Task' : 'New Task'}
      </h1>
      <form
        onSubmit={onSubmit}
        className='flex flex-col bg-zinc-800 w-1/3 mx-auto mt-10 p-6 rounded-md'
      >
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          className='bg-zinc-700 p-2 rounded-md'
          placeholder='Title'
          onChange={handleChange}
          autoFocus
          value={task.title}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          rows={3}
          className='bg-zinc-700 p-2 rounded-md'
          placeholder='Description'
          onChange={handleChange}
          value={task.description}
        />

        <button
          className='flex items-center justify-center bg-emerald-700 p-2 rounded-md mt-2 hover:bg-emerald-800 transition duration-300 ease-in-out gap-x-2 disabled:opacity-30'
          disabled={!task.title || !task.description}
        >
          <BiSave />
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskFormPage;
