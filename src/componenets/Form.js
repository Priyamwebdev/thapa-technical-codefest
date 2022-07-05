import React from 'react'

const Form = () => {
  return (
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="form flex flex-col my-5 p-6 mg:p-10 xl:p-16 bg-slate-100 rounded-lg mx-40">
      <h1 className='font-semibold text-lg my-3'>Contact us for free trial</h1>
      <input type="text" placeholder='name' className='py-2 my-2 rounded-md  px-6 border-solid border-2 border-gray-300 focus:border-gray-400' />
      <input type="text" placeholder='email' className='py-2  my-2 rounded-md px-6 border-solid border-2 border-gray-300 focus:border-gray-400' />
      <button className='py-2 my-3 px-4 bg-blue-700 text-white text-md xl:text-lg hover:bg-blue-900 rounded-lg'>Get my 14 day free trial now!</button>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
   <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1588873281272-14886ba1f737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"/>
 </div>
 </div>
  )
}

export default Form