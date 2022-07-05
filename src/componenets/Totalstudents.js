import React from 'react'
import { CountUp } from 'use-count-up'
import { useState } from 'react'
import { useEffect} from 'react'
const Totalstudents = () => {
    const [isrunning, setisrunning] = useState(null)
    let scrollable = 41
    let scrolled = window.screenY
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
           let scrolled  = window.scrollY 
            if(Math.ceil(scrolled) === 918){
                setisrunning(true)
            }
           else if(Math.ceil(scrolled) === 924){
                setisrunning(true)
            }
           else if(Math.ceil(scrolled) === 964){
                setisrunning(true)
            }
           else if(Math.ceil(scrolled) === 981){
                setisrunning(true)
            }
        
        })
        }, [isrunning])
  return (
    <>
    <section>
        <div className="container flex bg-blue-500 justify-center mx-auto  border-4 border-blue-600 border-solid rounded-lg flex-col md:flex-row" >
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl">{isrunning &&<CountUp isCounting end={5000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center'>Teachers</h1>
            </div>
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl">{isrunning &&<CountUp isCounting end={15000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center'>Happy students</h1>
            </div>
            <div className='px-12 mx-auto my-4 text-white'>
                <div className="counter text-center font-mono text-4xl" data-target='20000'>{isrunning &&<CountUp isCounting end={20000} duration={3.1} />}+</div>
                <h1 className='font-bold text-2xl text-center bg-blue-500'>Students</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default Totalstudents