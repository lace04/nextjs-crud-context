'use client';

import React from 'react';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { useTask } from '@/context/taskContext';

function Navbar() {
  const { tasks } = useTask();
  return (
    <>
      <nav className='w-full bg-zinc-900 h-16 flex justify-between items-center'>
        <div className=''>
          <Link
            href='/'
            className='text-white font-bold text-md md:text-lg p-2 ml-14'
          >
            Task App React Context
          </Link>
          <span className='text-xs'>{tasks.length} Tasks</span>
        </div>
        <Link
          className='flex items-center text-white font-semibold text-xs md:text-lg p-2 bg-green-600 h-[60%] rounded-md hover:bg-green-800 transition duration-300 ease-in-out mr-14'
          href='/tasks/new'
        >
          <AiOutlinePlus className='mr-2' />
          Add Task
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
