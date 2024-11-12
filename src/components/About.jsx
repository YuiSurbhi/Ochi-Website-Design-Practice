import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl py-20 bg-[#CDEA68] text-[#000]'>
      <h1 className='text-[3.2vw] leading-[3.5vw] '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio qui odit repudiandae, eos sapiente accusantium iste? Commodi, natus itaque voluptas, perferendis culpa hic aliquam, ea nihil sequi quasi nostrum cum est blanditiis alias aliquid numquam saepe. Expedita assumenda nostrum quos.
     </h1>
     <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#738146] '>
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our Approach :</h1>
        <button className='flex  uppercase gap-10 px-10 py-6 bg-zinc-900 items-center rounded-full mt-10 text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl'></div>
     </div>
    </div>
  )
}

export default About
