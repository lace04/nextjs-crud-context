import React from 'react';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import { Task } from '@/interfaces/task.interface';
import { useTask } from '@/context/taskContext';
import { motion } from 'framer-motion';

interface TaskCardProps {
  task: Task;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function TaskCard({ task, index }: TaskCardProps) {
  const { deleteTask } = useTask();
  const router = useRouter();
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0 }}
      variants={variants}
      layoutId={task.id}
      className='bg-zinc-800 p-4 rounded-md cursor-pointer'
      onClick={() => router.push(`/tasks/${task.id}`)}
    >
      <div className='flex justify-between'>
        <h1 className='text-2xl'>
          {index + 1}. {task.title}
        </h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id!); // Use optional chaining operator to check if task.id is defined
          }}
        >
          <MdDelete size={24} className='text-red-400 hover:text-red-500' />
        </button>
      </div>
      <p className='text-zinc-500'>{task.description}</p>
      <span className='text-xs text-zinc-600'>{task.id}</span>
    </motion.div>
  );
}

export default TaskCard;
