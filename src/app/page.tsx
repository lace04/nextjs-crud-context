'use client';

import TasksList from '@/components/TasksList';
import { useTask } from '@/context/taskContext';

function HomePage() {
  const { tasks } = useTask();
  return (
    <div>
      <TasksList tasks={tasks} />
    </div>
  );
}

export default HomePage;
