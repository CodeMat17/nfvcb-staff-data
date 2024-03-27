"use client";

// components/HamburgerMenu.js
import { motion } from "framer-motion";
import {
  AlignRight,
  Briefcase,
  Contact,
  Film,
  Home,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleMenu}
        className=' focus:outline-none flex items-center'>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-8 h-8  flex justify-center items-center'>
          {isOpen ? (
            <X className='text-red-600 text-2xl w-10 h-10 font-bold' />
          ) : (
            <AlignRight className='text-2xl w-10 h-10 font-bold' />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`absolute top-12 right-0 bg-gray-300/90 dark:bg-gray-900/90 px-2 py-4 shadow-md w-[280px] rounded-lg ${
          isOpen ? "block" : "hidden"
        }`}>
        {/* Add your menu links here */}

        <Link
          href='/'
          onClick={() => setIsOpen(false)}
          className='flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold '>
          <Home className='mr-4' /> HOME
        </Link>
        <Link
          href='/dashboard'
          onClick={() => setIsOpen(false)}
          className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          <Contact className='mr-4' /> STAFF DATA
        </Link>
        <Link
          href='#'
          onClick={() => setIsOpen(false)}
          className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          <Film className='mr-4' /> MOVIES
        </Link>
        <Link
          href='#'
          onClick={() => setIsOpen(false)}
          className='flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold'>
          <Users className='mr-4' /> CLIENTS
        </Link>
        <Link
          href='#'
          onClick={() => setIsOpen(false)}
          className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg tracking-wider text-lg font-semibold'>
          <Briefcase className='mr-4' /> OTHERS
        </Link>

        {/* Add more links as needed */}
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
