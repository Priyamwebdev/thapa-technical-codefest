import React from 'react'
import '../App.css';
const Form = () => {
  return (
      <div className='headers'>
        <h1 className='font-bold text-center text-4xl mt-20 mb-6 text-white'>Learn Online</h1>
        <hr />
        <p className='text-center px-16 my-4 mt-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus eum doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in!</p>
        <div className='space-x-7 text-center my-12'>
        <button className='bg-indigo-400 text-xl px-3 py-3 rounded-lg text-white'>Buy Courses</button>
        <button className='bg-indigo-400 text-xl px-3 py-3 rounded-lg text-white'>Book Online classe</button>
        </div>
      </div>
  )
}

export default Form