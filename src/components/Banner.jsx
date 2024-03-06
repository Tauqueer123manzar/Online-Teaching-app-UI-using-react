import React from 'react'
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'> 
      <div className='max-w-[1240px] my-[100px] mx-auto font-bold text-center'>
        <div className=' text-xl md:text-3xl md:p-[24px]'>
            Learn with us
        </div>
        <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>
            Grow with us
        </h2>
        <div className='text-white text-[20px] md:text-[40px] md:p-[24px]'>
            Learn
            <ReactTyped className='pl-4 '
              strings={[
                  "Web Development",
                  "Blockchain Development",
                  "Devops",
                  ]}
              typeSpeed={100}
              backSpeed={70}
              loop
              >
        </ReactTyped>
      </div>
      </div>
    </div>
  )
}

export default Banner
