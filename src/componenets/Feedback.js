import React from 'react'

const Feedback = () => {
  return (
    <div className='my-5'>
        <h1 className='text-center font-bold text-3xl my-4'>Share your Feedback</h1>

        <div className="flex flex-col space-y-5 my-5">
            <input type="text" placeholder='Your Name'  className='bg-gray-50  w-1/3 mx-auto border-2 border-solid border-gray-300 rounded-md text-center h-8'/>
            <input type="email" name="" id="" placeholder='Your email' className='bg-gray-50 w-1/3 mx-auto border-2 border-solid border-gray-300 rounded-md text-center h-8' />
            <textarea name="feedback" id="" cols="30" rows="6" placeholder='Write your feedback' className='bg-gray-50 w-1/3 mx-auto border-2 border-solid border-gray-300 rounded-md text-center'></textarea>
            <button type="submit" className='py-2 w-96 text-white bg-indigo-500 rounded-md mx-auto hover:bg-indigo-600'>Submit your feedback</button>
        </div>
    </div>
  )
}

export default Feedback