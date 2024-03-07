import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
export default function Card() {
  return (
    <div className='max-width-[1240px] mx-auto my-4 md:grid grid-cols-3 gap-6'>

      <div className='shadow-xl  my-2 h-[500px] hover:scale-90 duration-500 flex flex-col justify-center items-center'>
        <img className='w-[80px] h-[65px]' src={single} alt="missing image"/>
        <p className='font-bold text-2xl mt-2'>Web Development</p>
        <p className='font-bold text-3xl mt-2'>$149</p>
        <p className='text-sm p-4 mt-4'>
           Lorem ipsum dolor sit amet consectetur suscipit<br></br>
           adipisicing elit. Praesentium quae architecto<br></br>
           cumque voluptas, aspernatur saepe dolorum in<br></br></p>
           <button className='bg-[green] text-white w-[150px] p-3 rounded'>Start Trial</button>
      </div>

      <div className='shadow-xl my-2 h-[500px] hover:scale-90 duration-500 flex flex-col justify-center items-center'>
      <img className='w-[80px] h-[65px]' src={double} alt="missing image"/>
        <p className='font-bold text-2xl mt-2'>Blockchain Development</p>
        <p className='font-bold text-3xl mt-2'>$250</p>
        <p className='text-sm p-4 mt-4'>
           Lorem ipsum dolor sit amet consectetur suscipit<br></br>
           adipisicing elit. Praesentium quae architecto<br></br>
           cumque voluptas, aspernatur saepe dolorum in<br></br></p>
           <button className='bg-[#00d5ff] text-white w-[150px] p-3 rounded'>Start Trial</button>
      </div>

      <div className='shadow-xl my-2 h-[500px] hover:scale-90 duration-500 flex flex-col justify-center items-center'>
      <img className='w-[80px] h-[65px]' src={triple} alt="missing image"/>
        <p className='font-bold text-2xl mt-2'>Devops</p>
        <p className='font-bold text-3xl mt-2'>$200</p>
        <p className='text-sm p-4 mt-4'>
           Lorem ipsum dolor sit amet consectetur suscipit<br></br>
           adipisicing elit. Praesentium quae architecto<br></br>
           cumque voluptas, aspernatur saepe dolorum in<br></br></p>
           <button className='bg-[orange] text-white w-[150px] p-3 rounded'>Start Trial</button>
      </div>
    </div>
  )
}
