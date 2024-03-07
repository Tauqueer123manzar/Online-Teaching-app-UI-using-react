import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
     <div className='m-2'>
        <h1 className='text-white text-[20px] md:text-[40px] font-bold'>Want to learn latest I.T Skills?</h1>
       <span className='text-white'>sign up to our newsletter and stay up to date.</span>
     </div>
     <div className='m-2'>
          <input type="text" className='p-3 mr-2 text-slate-600 ' placeholder='Email'/>
          <button className='bg-[black] text-white p-3'>Notify me</button>
          <br></br>
          <span className='text-white'>
            we care about your data.Read your data and description.<br></br>
            <a href="#" className='text-black'>privacy policy</a>
          </span>
     </div>
    </div>
    </div>
  )
}
