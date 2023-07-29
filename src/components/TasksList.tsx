import React from 'react';
import { Task } from '@/interfaces/task.interface';
import TaskCard from '@/components/TaskCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface Props {
  tasks: Task[];
}

function TasksList({ tasks }: Props) {
  return (
    <div className=''>
      {tasks.length > 0 ? (
        <div className='grid grid-cols-3 p-2 gap-2'>
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
        </div>
      ) : (
        <h1 className='text-4xl h-screen flex justify-center items-center'>
          No tasks
        </h1>
      )}
    </div>
  );
}

export default TasksList;
