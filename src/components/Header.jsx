import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [toggle,settoggle]=useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>
          Wscube tech
        </div>
        {
          toggle?
          <IoCloseSharp onClick={()=> settoggle(!toggle)} className='text-white text-2xl md:hidden  block'/>
        :
        <IoMenu onClick={()=> settoggle(!toggle)} className='text-white text-2xl
         md:hidden block'/>
        }
        <ul className='hidden md:flex text-white gap-10'>
          <li>
             Home
          </li>
          <li>
             Company
          </li>
          <li>
             Resource
          </li>
          <li>
             About
          </li>
          <li>
            Contact
          </li>
        </ul>
             {/* for responsive */}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[90px] left-[-100%]
                        ${toggle ? 'left-[0]':'left-[-100%]'}`}>
          <li className='p-5'>
             Home
          </li>
          <li className='p-5'>
             Company
          </li>
          <li className='p-5'>
             Resource
          </li>
          <li className='p-5'>
             About
          </li>
          <li className='p-5'>
            Contact
          </li>
        </ul>  
      </div>
    </div>
  )
}

export default Header
