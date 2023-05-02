import React from 'react'
import logo1 from '../assests/logo1.png'
import {GoLocation} from "react-icons/go"
import {TbMessageShare} from "react-icons/tb"
import {IoIosCall} from "react-icons/io"

const Footer = () => {
  return (
    <div>
        <div className=' bg-fuchsia-600 m-4 p-4 flex justify-around'> 
        <div className='ml-[-50px]'>
        <img src={logo1} className='h-[120px] mt-[-30px] shadow-2xl rounded-lg border-slate-950'/>
        <p className='mt-4 text-white italic'>“High-Quality Educations, Shaping minds,<br/> moulding dreams, building careers. “</p>
        </div>

        <div>
            <span className='text-xl font-bold text-white '>Contact US</span>
            <ul className='text-white mt-2 '>
                <li className='flex items-center gap-2 '>
                    <GoLocation size={20}/>
                    Nagarjun, Kathmandu, Nepal
                    </li>
                <li className='flex items-center gap-2'> <TbMessageShare size={20}/>himalayawaldorf@gmail.com</li>
                <li className='flex items-center gap-2'> <IoIosCall size={20}/>9851109795</li>
                <li className='flex items-center gap-2'> <IoIosCall size={20} />985-1141885</li>
            </ul>
        </div>
        
        </div>
    </div>
  )
}

export default Footer