import Link from 'next/link'
import React from 'react'

const Card = ({title,desc,url,language}) => {
    
  return (
    <div className=' flex flex-col text-left w-[55%] bg-[#ECF8F9] 
                    mt-6 p-5 rounded-xl h-[180px] gap-3 justify-center
                    transition-all duration-500 hover:translate-y-[-20px] '>
        <p className='text-3xl'>{title} </p>
        <p>{desc} </p>
        <div className=' flex flex-row justify-between'>
            <p>{language} </p>
            <Link href={url} className=' cursor-pointer w-24 h-10 bg-slate-200 rounded-2xl flex flex-row items-center justify-center'>Preview</Link>
        </div>
    </div>
  )
}

export default Card