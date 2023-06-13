"use client";
import React, { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai';


const Navbar = () => {
  
  function handlebtnn3(){
    
    
  }
  return (
    <div className=' flex flex-row justify-between p-5 w-[70%] mt-2 max-lg:w-full max-lg:p-2'>
        <div className=' flex flex-row gap-1 justify-center items-center'>
            <AiOutlineMail size={24}/>
            sahin.taha.295@gmail.com
        </div>
        <div className='flex flex-row gap-6 '>
          <a href='https://www.youtube.com/channel/UC59a2KHqlKRuIrO1Yv0xeBg'>Projects</a>
          <a href='https://github.com/sTahaDev'>Skills</a>
        </div>
    </div>
  )
}

export default Navbar