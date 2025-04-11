import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { IoArrowDown } from 'react-icons/io5';
import Footer from '../components/Footer';
import MouseFollow from '../components/MouseFollow';
import Navbar from '../components/Navbar';
import SkillCard from '../components/SkillCard';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [startCount, setStartCount] = useState(true);

   useEffect(() => {

      gsap.set('#fade-left', { opacity: 0, x: -100 });
      gsap.set('#fade-right', { opacity: 0, x: 100 });
      gsap.set('#fade-up', { opacity: 0, y: 100 });

      const loadingBar = gsap.to('.loading-bar', {
         width: '100%',
         duration: 3,
         ease: 'ease'
      });

      const fanBrown = gsap.to(['#fan-brown', '#black-orbit'], {
         rotate: 360,
         repeat: -1,
         duration: 5,
         ease: 'linear'
      });

      const timer = setTimeout(() => {
         setIsLoading(false);
         setStartCount(false);
      }, 3000);

      const fadeUp = ScrollTrigger.create({
         trigger: '#fade-up',
         start: 'top 70%',
         // markers: true,
         id: 'fade-up',
         onEnter: () => {
            gsap.to('#fade-up', {
               duration: 1,
               y: 0,
               opacity: 1,
            })
         }
      })

      const fadeLeft = gsap.to('#fade-left', {
         duration: 1,
         x: 0,
         opacity: 1,
      })

      const fadeRight = gsap.to('#fade-right', {
         duration: 1,
         x: 0,
         opacity: 1,
      })


      const textSlide = gsap.to('#text-slide div', {
         xPercent: -100,
         duration: 5,
         ease: 'linear',
         repeat: -1,
      })

      return () => {
         loadingBar.kill();
         clearTimeout(timer);
         fadeUp.kill();
         fanBrown.kill();
         textSlide.kill();
         fadeLeft.kill();
         fadeRight.kill();
      }
   }, [isLoading]);



   if (isLoading) {

      return (
         <div className="min-h-screen flex justify-center items-end pb-[10%] bg-primary">
            <div className='flex flex-col max-w-[1100px] w-[90%] mx-auto  justify-end'>
               <p className='loading-text font-extralight text-[3rem] md:text-[5rem] text-textprim'>{startCount && <CountUp start={0} end={100} duration={3} />}%</p>
               <hr className='loading-bar h-[3px] bg-textprim w-[0%]'></hr>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-primary overflow-x-hidden">
         <Navbar />
         <MouseFollow />
         <div className="flex flex-col">

            <section className='home-1  flex flex-col font-cormorant h-screen justify-evenly md:justify-between py-0 px-0 md:py-[1%] md:px-[7%] text-textprim'>
               <div className='w-full md:px-0 px-2 pt-[10px]'>
                  <p className='text-[4rem] md:text-[10rem] leading-none md:leading-[140px] ' id="fade-left">Richky<br />Abednego</p>
               </div>
               <div className='w-full '>
                  <p className='max-w-[500px] md:text-left text-center font-light text-[0.9rem] pt-0 px-10 md:pt-[70px] md:pl-[20px]'>
                     I CREATE DIGITAL EXPERIENCES THAT MERGE ARTS AND TECHNOLOGY,
                     PRODUCING INNOVATIVE SOLUTIONS, BRANDINGS,
                     WEB DESIGN, DIGITAL INTERACTIONS, AND ARTIFICIAL INTELLIGENCE
                  </p>
               </div>
               <div className='w-full relative pb-[20px] md:pr-0 pr-2 flex justify-between items-center'>
                  <img className='md:size-[80px] size-[50px] md:ml-0 ml-[40px]' src="img/fan-brown.png" id="fan-brown" alt="fan-brown" />
                  <p className='text-[4rem] md:text-[10rem] leading-none md:leading-[140px] text-right' id="fade-right">Software<br />Engineer</p>
               </div>
            </section>

            <section className="home-2 flex mt-[30px] md:mt-[100px] flex-col h-screen w-full items-center justify-center  font-cormorant text-textprim">
               <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                  <div id="fade-up" className='text-[4rem] md:text-[7.5rem] flex flex-col leading-none md:leading-[7rem] font-dancing font-bold text-center'>
                     <p>Shortly</p>
                     <p>About</p>
                     <p>Myself</p>
                  </div>
                  <p className='text-[0.6rem] md:text-[1rem] font-light text-center'>
                     I LOVE TO COMBINE THE MODERN TECHNOLOGIES WITH VISUALS.<br />
                     I BELIEVE THAT EVERY PROJECT I DO SHOULD HAVE AN OVERVALUE.<br />
                     I ALWAYS FIND OPTIMAL SOLUTIONS FOR THE TASKS GIVEN.
                  </p>
                  <img src="img/black-star.png" className='size-[30px] mt-[-10px] md:mt-[-30px] md:size-[40px] mx-auto' alt="black-star" />
               </div>
            </section>

            <section className='w-full overflow-hidden '>
               <div id="text-slide" className='w-full flex text-[2rem] md:text-[7.5rem] mt-[20dvh] text-center font-dancing font-light'>
                  <div className='text-textprim flex-shrink-0 px-0 min-w-[50%]'> - MY SKILLS </div>
                  <div className='text-textprim flex-shrink-0 px-0 min-w-[50%]'> - MY SKILLS </div>
                  <div className='text-textprim flex-shrink-0 px-0 min-w-[50%]'> - MY SKILLS </div>
                  <div className='text-textprim flex-shrink-0 px-0 min-w-[50%]'> - MY SKILLS </div>
               </div>
            </section>

            <section className='w-full'>
               <SkillCard />
            </section>

            <section className='w-fit mx-auto my-[20dvh] b-dotted text-textprim'>
               <div className='flex justify-center items-center w-full'>
                  <h1 className='text-center text-[2rem] sm:text-[3rem] lg:text-[5rem] md:text-[3rem] font-light font-cormorant line-through decoration-[1px]'>My Projects and Works</h1>
                  <IoArrowDown className="text-textprim  -rotate-45 text-[2rem] sm:text-[3rem] lg:text-[5rem] md:text-[3rem]-rotate-45" />
               </div>
               <a className='mx-auto flex w-fit text-center text-[1rem] md:text-[1.5rem] font-light cursor-pointer hover:font-bold'
                  href='https://github.com/ZannunakiZ'>Click me!</a>
               <hr className='border-dotted border-textprim w-full md:mt-[120px] mt-[50px]' />
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
      </div>
   );
};

export default Home; 