import React from 'react'

const Navbar = () => {
  return (
     <div>
       <nav className='py-3 bg-violet-800 w-full bg-opacity-70 fixed top-0 z-10'>
         <div className="navbar">
           <ul className='flex mx-auto  md:justify-center lg:justify-end md:mx-10 text-xl text-white'>
             <li className='hover:bg-violet-900 hover:bg-opacity-25 rounded-lg px-5 cursor-pointer py-1'><a href="#home">Home</a></li>
             <li className='hover:bg-violet-900 hover:bg-opacity-25  rounded-lg px-5 cursor-pointer py-1'><a href="#about">About</a></li>
             <li className='hover:bg-violet-900 hover:bg-opacity-25 rounded-lg px-5 cursor-pointer py-1'><a href="#faq">FAQ</a></li>
             <li className='hover:bg-violet-900 hover:bg-opacity-25 rounded-lg px-5 cursor-pointer py-1'><a href="#course">Courses</a></li>
           </ul>
         </div>
       </nav>
     </div>
  )
}

export default Navbar