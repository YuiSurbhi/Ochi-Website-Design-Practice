import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-teal-800 overflow-hidden'>
      <div className='text flex border-t-2 border-b-2 border-zinc-300 gap-10 whitespace-nowrap'>
        <motion.h1
          initial={{x: "0"}} 
          animate={{x: "-100%"}} 
          transition={{repeat: Infinity, ease: "linear", duration: 6}} 
          className='text-[18vw] inline-block leading-none uppercase pt-10 pb-10 -mt-[3vw] -mb-[3vw] font-semibold pr-10'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{x: "0"}} 
          animate={{x: "-100%"}} 
          transition={{repeat: Infinity, ease: "linear", duration: 6}}  
          className='text-[18vw] inline-block leading-none uppercase pt-10 pb-10 -mt-[3vw] -mb-[3vw] font-semibold pr-10'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  )
}
export default Marquee
