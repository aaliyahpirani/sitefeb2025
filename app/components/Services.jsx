import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>Who I am</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>My experiences</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Learn about my previous experiences with leadership, research, and how they shaped my passions today!
      </motion.p>

      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  className='grid grid-cols-auto gap-6 my-10'>
  {serviceData.map(({ icon, title, description, date }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
        >
          {/* Icon with conditional white background for dark mode */}
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${isDarkMode ? 'bg-white' : ''}`}>
            <Image src={icon} alt='' className='w-8 h-8 object-contain' />  {/* Ensuring all images are same size */}
          </div>

          <h3 className='text-lg my-2 text-gray-700 dark:text-white'>
            {title}
          </h3>

          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
            {date}
          </p>


          <p className='text-sm text-gray-600 leading-5 dark:text-white/80 mt-1'>
            {description}
          </p>

      
        </motion.div>
      ))}
    </motion.div>
    </motion.div>
  );
};

export default Services;
