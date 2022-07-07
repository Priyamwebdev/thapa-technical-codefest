import React from 'react'
import '../App.css';
const Form = () => {
  return (
      <div className='headers' id='home'>
        <h1 className='font-bold text-center text-4xl mt-20 mb-6 text-white'>Learn Online</h1>
        <hr className='w-1/4 mx-auto h-2' />
        <p className='text-center px-16 my-4 mt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus eum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in!</p>
        <div className='space-x-7 text-center my-12'>
        <button className=' border-2 border-gray-500 border-solid sm:text-xl px-3 py-3 rounded-lg hover:bg-violet-900 hover:bg-opacity-90 bg-violet-800 bg-opacity-75 text-white text-base'>Buy Courses</button>
        <button className=' border-2 border-gray-500 border-solid sm:text-xl px-3 py-3 rounded-lg hover:bg-violet-900 hover:bg-opacity-90 bg-violet-800 bg-opacity-75 text-white text-base'>Book a Online class</button>
        </div>
      </div>
  )
}

export default Form