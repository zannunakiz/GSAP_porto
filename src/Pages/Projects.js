import gsap from 'gsap'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import LiquidCard from '../components/LiquidCard'
import MouseFollow from '../components/MouseFollow'
import Navbar from '../components/Navbar'

const Projects = () => {

   useEffect(() => {
      gsap.set("#skew-fade", {
         skewY: -10,
         x: -100,
         opacity: 0,
      })
      gsap.to("#skew-fade", {
         skewY: 0,
         stagger: 0.3,
         x: 0,
         delay: 0.2,
         opacity: 1,
         duration: 2,
         ease: "power2.out",
      })
      gsap.to('#black-orbit', {
         rotate: 360,
         repeat: -1,
         duration: 5,
         ease: "linear",
      })
   })
   return (
      <div>
         <MouseFollow />
         <Navbar />

         <section className='my-[50px] px-20 md:text-[8rem] text-[2rem] font-cormorant md:leading-[8rem] leading-[2rem]' >
            <div id="skew-fade"><h1>MY</h1></div>
            <div id="skew-fade"><h1>PROJECTS</h1></div>
         </section>

         <section><LiquidCard /></section>

         <section className='w-fit mx-auto my-[20dvh] text-textprim'>
            <div className='relative text-center py-[50px] lg:text-[5rem] xl:text-[10rem] text-[2rem] sm:text-[3rem] md:text-[3rem] font-cormorant'>
               GET IN TOUCH
               <img id='black-orbit' src="img/black-orbit.png" alt='black-orbit' className='absolute top-0 left-1/2 -translate-x-1/2 size-[180px] md:size-[300px] opacity-30' />
            </div>
            <p className='text-center text-[0.5rem] max-w-[200px] mx-auto md:max-w-[80%] md:text-[1.2rem] font-light'>IF YOU HAVE ANY GENERAL PROJECT OR ENDQUERY FEEL FREE TO CONTACT US - AVAILABLE NOW!</p>
         </section>
         <section><Footer /></section>
      </div>
   )
}

export default Projects