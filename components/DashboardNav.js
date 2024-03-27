import Image from 'next/image';
import React from 'react'
import ThemeToggleButton from './ThemeToggleButton';

const DashboardNav = () => {
  return (
    <div className='sticky top-0 z-50 px-4 py-1.5 flex items-center justify-between mb-8 bg-white dark:bg-slate-950'>
      <div className='relative md:hidden w-[60px] aspect-square rounded-lg overflow-hidden'>
        <Image alt='' priority fill src='/nfvcb_logo.webp' />
          </div>
          <ThemeToggleButton />
    </div>
  );
}

export default DashboardNav