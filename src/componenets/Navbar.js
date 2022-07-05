import React from 'react'

const Navbar = () => {
  const handleAboutClick = () =>{
    window.scrollTo(0,1450)
  }
  const handleFAQClick = () =>{
    window.scrollTo(0,2650)
  }
  const handleCourseClick = () =>{
    window.scrollTo(0,630)
  }
  return (
    <nav className=' bg-slate-500 flex justify-end'>
      <div className="nav">
        <ul className='flex  space-x-7 my-2 mr-10 text-xl text-white'>
        <li className='border-b-2 border-solid border-slate-500 hover:border-white cursor-pointer' onClick={handleAboutClick}>About</li>
        <li className='border-b-2 border-solid border-slate-500 hover:border-white cursor-pointer'><a href="#faq">FAQ</a></li>
        <li className='border-b-2 border-solid border-slate-500 hover:border-white cursor-pointer'><a href="#about">Courses</a></li>
        </ul>
      </div>
        <ul className='items-center my-2'> 
        <button className='py-2 px-4  bg-blue-500 my-auto rounded-3xl text-base text-white mr-8 hover:bg-blue-700 '>Join now</button>
        </ul>
    </nav>
  )
}

export default Navbar