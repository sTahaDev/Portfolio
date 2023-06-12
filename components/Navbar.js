"use client";
import React, { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai';


const Navbar = () => {
  
  function handlebtnn3(){
    
    
  }
  return (
    <div className=' flex flex-row justify-between p-5 w-[70%] mt-2 '>
        <div className=' flex flex-row gap-1 justify-center items-center'>
            <AiOutlineMail size={24}/>
            sahin.taha.295@gmail.com
        </div>
        <div className='flex flex-row gap-6'>
          <button onClick={handlebtnn3}>Projects</button>
          <button>My interests</button>
        </div>
    </div>
  )
}

export default Navbar