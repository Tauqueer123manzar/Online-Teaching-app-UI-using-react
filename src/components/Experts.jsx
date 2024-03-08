import React from 'react'
import laptop from '../assets/laptop.jpg'
export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2'>
      <div className='col-span-1 md:w-[80%] text-justify'>
        <img src={laptop} alt="missing image" className='inline'/>
      </div>
      <div className='col-span-1 flex flex-col justify-center ml-6'>
        <h1 className='text-[#00df9a] font-bold my-2 justify-center'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>Virtual learning platforms,such as Udemy, 
        have gained increasing popularity due to their numerous advantages.
         These platforms offer flexibility, as learners can access courses
          anytime and anywhere. Additionally,and students have the freedom
           to learn at their own pace with online course.</p>
           <button className='w-[30%] bg-[black] text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}
