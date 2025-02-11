import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center mb-10 text-5xl font-Ovo'>A bit about me</motion.h2>

      {/* Paragraph text directly below the heading */}
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='text-center mb-10'>
        <p className='max-w-2xl mx-auto font-Ovo'>
          I'm a first year student at the University of Toronto, passionate about using 
          technology to make an impact! Specifically, I'm interested in the intersection of medicine and technology and its potential to 
          revolutionize the healthcare industry today.
        </p>
      </motion.div>

      {/* Flex container for the image and info list */}
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex flex-col lg:flex-row items-start gap-20'>
        
        {/* Photo section on the left */}
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none mx-auto sm:ml-0'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </motion.div>

        {/* Info list section on the right */}
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='flex-1'>
          <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-1 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                          hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black 
                          dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}>
                <div className='flex items-center space-x-4'>
                  <Image 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title} 
                    className="w-6 h-6 object-contain filter grayscale-0 dark:grayscale dark:hover:grayscale-0" 
                  />
                  <h3 className='my-2 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                </div>

                {Array.isArray(description) ? (
                  description.map(({text, bold}, idx) => (
                    <p key={idx} className={`text-gray-600 text-sm dark:text-white/80 ${bold ? 'font-bold' : ''} ${idx > 0 ? 'mt-2' : ''}`}>
                      {text}
                    </p>
                  ))
                ) : (
                  <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
