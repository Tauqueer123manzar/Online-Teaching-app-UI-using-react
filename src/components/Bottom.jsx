import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Bottom() {
  return (
    <div className='bg-[#2699fb] p-4'>
     <div className='max-w-[1240px] mx-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-2 my-12'>
            <p className='font-bold text-[black] text-[25px] my-2'>Online Teaching</p>
            <p className='text-[17px] font-medium text-white text-justify'>
               Can I study bookkeeping online?
               You can complete your course from the
               comfort of your own home. You can ask an
               industry-expert tutor for help if you get
               stuck with your coursework. You will gain
               valuable skills in bookkeeping and accounting.
               You will be able to choose whether you want to pay your 
               course fees upfront or in monthly instalments.</p>      
            <div className=' my-5 h-[100px] flex justify-between'>
              <a className=' font-bold text-[blue] text-[35px]' href="https://www.facebook.com" target="_blank" rel="facebook"> <FaSquareFacebook /></a>
              <a className=' font-bold text-[#63401d] text-[35px]' href="https://www.amazon.com" target="_blank" rel="facebook"><AiFillAmazonSquare /></a>
              <a className=' font-bold text-[#003cff] text-[35px]' href="https://www.twitter.com" target="_blank" rel="facebook"><FaTwitterSquare /></a>
              <a className=' font-bold text-[black] text-[35px]' href="https://www.github.com" target="_blank" rel="facebook"><FaGithub /></a>
            </div>
        </div>

        <div className='my-12'>
          <a className='font-bold text-[20px] text-black flex justify-center my-4' href="#Solutions">Solutions</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Analytics">Analytics</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Marketing">Marketing</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Commerce">Commerce</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Insights">Insights</a>

        </div>
        <div className='my-12 '>
          <a className='font-bold text-[20px] text-black flex justify-center  my-4' href="#Company">Company</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#About">About</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Blog">Blog</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Jobs">Jobs</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Press">Press</a>
        </div>
        <div className='my-12'>
          <a className='font-bold   text-[20px] text-black flex justify-center my-4' href="#Support">Support</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Pricing">Pricing</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Documentation">Documentation</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#Guides">Guides</a>
          <a className='font-medium text-[17px] text-white flex justify-center my-7' href="#API Status">API Status</a>
        </div>
     </div>
      
    </div>
  )
}
