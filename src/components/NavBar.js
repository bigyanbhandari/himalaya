import React from 'react'
import logo from "../assests/logo.png";
import { Link, } from 'react-router-dom';



const NavBar = () => {
   
  return (
    <div >
       
     <nav className='flex items-center justify-around   bg-fuchsia-600 h-[120px] m-4 p-4 ' >
        <div  > 
       
          <div className='flex items-center gap-2'>
          <img src={logo}  alt='image' className='rounded-full h-[130px]'/>
          <span className='text-4xl font-bold text-white font-mono hover:font-serif'>Himalaya Waldorf School</span>
          </div>
          </div>

        <div >
            <ul className='flex gap-14 text-xl text-white ' >
            <li className=' font-mono hover:font-serif'>
            <Link to="/">Home</Link>
            </li>
            <li className=' font-mono hover:font-serif'>
            <Link to="/aboutus">About Us</Link>
            </li>
           
            <li className=' font-mono hover:font-serif'>
            <Link to="/Contact">Contact</Link>
            </li>
            </ul>
        </div>
     </nav>
     
    </div>
  )
}

export default NavBar



