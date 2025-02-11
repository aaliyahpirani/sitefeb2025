import React, { useState } from 'react';
import { workData, assets } from '@/assets/assets'; // Ensure these are correctly defined
import Image from 'next/image';
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // To track modal state
  const [currentProject, setCurrentProject] = useState(null); // Store currently selected project

  const handleModalOpen = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>What I've done</motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Explore a collection of my projects and the tools I used!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => handleModalOpen(project)}
          >
            <div
              className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0#000] group-hover:bg-slate-100 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>

            {/* App logos positioned at the top left */}
            <div className='absolute top-5 left-5 flex gap-6'>
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`App logo ${idx + 1}`}
                    width={28}  // Adjust the width as per your preference
                    height={28} // Adjust the height as per your preference
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
          <motion.div
            className="bg-white p-6 rounded-lg max-w-lg w-full relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-semibold text-center mb-4 dark:text-black"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {currentProject.title}
            </motion.h2>

            <motion.p
              className="text-sm text-gray-700 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {currentProject.modalDescription}
            </motion.p>

            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300"
            >
              <Image src={assets.close_black} alt="Close" width={20} height={20} />
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Work;
