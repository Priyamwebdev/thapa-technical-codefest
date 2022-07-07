import React from 'react'
import { CountUp } from 'use-count-up'
import { useState } from 'react'
const Totalstudents = () => {
  return (
    <>
    <section className='work-section-observer' id='work-section-observer' >
        <div className="container flex bg-blue-500 justify-center mx-auto  border-4 border-blue-600 border-solid rounded-lg flex-col md:flex-row" >
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl">{<CountUp isCounting end={5000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center'>Teachers</h1>
            </div>
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl">{<CountUp isCounting end={15000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center'>Happy students</h1>
            </div>
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl">{<CountUp isCounting end={20000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center bg-blue-500'>Students</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default Totalstudents