import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import MouseFollow from '../components/MouseFollow'
import Navbar from '../components/Navbar'

gsap.registerPlugin(ScrollTrigger)

const About = () => {


   useEffect(() => {

      gsap.set('#fade-left', { opacity: 0, x: -100 })
      gsap.set('#fade-bottom', { opacity: 0, y: 100 })
      gsap.set('#fade-right', { opacity: 0, x: 100 })
      gsap.set('#fade-skew', { opacity: 0, y: 100, skewX: 10 })

      gsap.to('#fade-left', {
         opacity: 1,
         x: 0,
         duration: 2,
         ease: 'ease'
      })
      gsap.to('#fade-bottom', {
         opacity: 1,
         y: 0,
         duration: 2,
         ease: 'ease'
      })
      gsap.to('#fade-right', {
         opacity: 1,
         x: 0,
         duration: 2,
         ease: 'ease'
      })
      gsap.to('#black-orbit', {
         rotate: 360,
         repeat: -1,
         duration: 5,
         ease: 'linear'
      })
      gsap.to('#fade-skew', {
         scrollTrigger: {
            trigger: '.container-fs',
            start: 'top center',
            // markers: true,
            toggleActions: 'play none none reverse'
         },
         skewX: 0,
         opacity: 1,
         y: 0,
         duration: 2,
         ease: 'power2.out'
      })
   }, [])

   return (
      <div className='overflow-x-hidden'>
         <MouseFollow />
         <Navbar />
         <section className='max-h-screen min-h-screen flex flex-col lg:justify-normal justify-center w-full font-cormorant relative '>
            <div className='flex w-full pl-10 lg:pt-10 pt-0 relative z-10' id="fade-left">
               <h1 className='lg:text-[9rem] text-[2rem] lg:leading-[8rem] leading-[2rem]'>Richky<br />Abednego</h1>
            </div>
            <div className='lg:mt-[-40px] mt-[0px]' id="fade-bottom">
               <img src="img/panorama.jpg" alt="panorama" className='max-w-[600px] w-[70%] h-[200px] my-10 lg:my-0 md:h-[700px] object-cover mx-auto' />
            </div>
            <div className='lg:absolute lg:bottom-[10%] lg:right-[5%] flex text-center mx-auto' id="fade-right">
               <p>I create Sites with pleasant emotions, <br />working with the latest technologies and tools.</p>
            </div>
         </section>

         <section className='flex flex-col gap-[50px] font-light tracking-[1px] md:tracking-[3px] mt-0 lg:mt-[350px] px-2 md:px-20 text-[0.6rem] md:text-[0.8rem]'>
            <div className='flex w-full'>
               <p>I SPECIALIZE IN AI MODELING, INTERACTIONS<br />WEB FUNCTIONALITIES, AND<br />SERVER HANDLINGS</p>
            </div>
            <div className='flex flex-col uppercase w-full text-right'>
               <p>Skills:</p>
               <p>HTML / CSS / JavaScript</p>
               <p>React / Next.js / Tailwind CSS</p>
               <p>Python / Django / PostgreSQL</p>
               <p>Node.js / Express.js / MongoDB</p>
            </div>
         </section>

         <section className='container-fs w-full px-2 my-[50px] text-[2rem] lg:text-[8rem] md:text-[7rem] leading-[2.5rem] md:leading-[6.2rem] font-dancing'>
            <div className='flex flex-col max-w-[65%] md:max-w-[880px] mx-auto' id="fade-skew">
               <div className='text-left'>Software Engineer</div>
               <div className='text-right'>Full Stack Dev</div>
               <div className='flex justify-between'>
                  <p>Web Dev</p>
                  <p>&</p>
               </div>
               <div className='text-center'>an Amogus</div>
            </div>
         </section>

         <section className='h-screen flex justify-center items-center text-center md:text-left text-[0.6rem] md:text-[1rem]'>
            <div className='flex flex-col gap-[50px] md:gap-[70px] lg:px-0 px-10 '>
               <div className='max-w-none md:max-w-[300px] text-center md:text-justify'>I DO BOTH WEB DESIGN AND DEVELOPMENT SO THE FINAL RESULT ARE ALWAYS THE WAY I IMAGINE IT</div>
               <div className='w-full '>I BELIEVE THAT EVERY SITE OR SERVICES SHOULD BE UNIQUE AND HAVE ITS OWN PERSONALITY, WEBSITES GIVE VALUES TO COMPANIES</div>
               <div className=' text-center md:text-right flex justify-center md:justify-end w-full'>
                  <p className=' max-w-none md:max-w-[300px]'>IF NECESSARY, MY SKILLS CAN BE USED TO WORK WITH MANY WORKFLOWS</p>

               </div>
               <div>I PREFER TO WORK AND CREATE WITH THE LATEST TECHNOLOGIES, SO THAT I AND CHALLENGE MYSELF TO BE ADAPTABLE</div>
               <div className='max-w-none md:max-w-[300px] text-center md:text-justify'>NOW I AM AN UNDERGRADUATE STUDENT AND I AM LOOKING FOR NEW CHALLENGES AND EXPERIENCES</div>
            </div>
         </section>

         <section>
            <h1 className='text-[2rem] md:text-[8rem] text-center line-through font-cormorant decoration-brown-300 decoration-[2px] text-textprim'>What is my feature?</h1>
         </section>

         <section className='flex justify-center items-center md:h-[70vh] h-[50vh]'>
            <div className='flex flex-col px-2 items-center font-light text-[0.6rem] gap-[30px] md:gap-[80px] md:text-[1rem] justify-center '>
               <div className='text-right'>
                  <p>I'VE BEEN LEARNING SINCE 2022.</p>
                  <p>DURING THIS TIME I'VE LEARNED A LOT OF THINGS.</p>
                  <p>I LIKE TO COMBINE FUNCTIONAL SOLUTION WITH</p>
                  <p>AESTHETICS. THIS IS HOW I CREATE A PRODUCT</p>
                  <p>THAT WILL BE USED WITH LOVE</p>
               </div>
               <div>
                  <p>I TRY TO USE ALL POSSIBLE TOOLS</p>
                  <p>IN MY WORK, I AM NOT AFRAID OF NEW TECHNOLOGIES</p>
                  <p>I AM ALWAYS OPEN TO NEW IDEAS AND</p>
                  <p>WAYS TO IMPROVE MY WORK</p>
               </div>
            </div>
         </section>

         <section className='beach-bg h-screen w-full flex justify-center items-center'>
            <div className='flex flex-col text-left bg-textprim p-10 text-white font-light text-[0.7rem] md:text-[1rem]'>
               <p>I AM PASSIONATE ABOUT STORY-DRIVEN GAMES</p>
               <p>I LOVE DIVING INTO IMMERSIVE NARRATIVES</p>
               <p>PROGRAMMING IS MY CREATIVE OUTLET</p>
               <p>I ENJOY BUILDING DIGITAL EXPERIENCES</p>
               <p>COMBINING CODE AND STORYTELLING IS MY DRIVE</p>
            </div>
         </section>


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

export default About