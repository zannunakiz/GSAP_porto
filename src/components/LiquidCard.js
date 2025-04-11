import React from 'react'
import { IoArrowUp } from 'react-icons/io5'
import overlayz from '../img/overlay.jpg'
import pic1 from '../img/project-1.jpg'
import pic2 from '../img/project-2.jpg'
import pic3 from '../img/project-3.jpg'
import pic4 from '../img/project-4.jpg'
import pic5 from '../img/project-5.jpg'
import pic6 from '../img/project-6.jpg'
import LiquidImage from './LiquidImage'


const projectList = [
   {
      id: 1,
      date: '01/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic1,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },
   {
      id: 2,
      date: '02/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic2,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },
   {
      id: 3,
      date: '03/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic3,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },
   {
      id: 4,
      date: '04/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic4,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },
   {
      id: 5,
      date: '05/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic5,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },
   {
      id: 6,
      date: '06/09',
      title: 'LOREM, IPSUM.',
      desc: 'LOREM, IPSUM.',
      image: pic6,
      bottomText: 'LOREM IPSUM DOLOR SIT AMET'
   },


]

const LiquidCard = () => {


   return (
      <div className='
      lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
      px-[30px] xl:px-[200px] md:px-[50px]
      gap-x-[0px] lg:gap-x-[50px] md:gap-x-[100px] 
      w-full grid py-10 gap-y-10 font-cormorant border-dotted border-t-2 border-textprim'>

         {projectList.map((project) => (
            <div className='flex flex-col'>
               <div className='text-[0.7rem] font-light'>{project.date}</div>
               <div className='flex justify-between mt-[-5px]'>
                  <h1 className='text-[1rem] font-semibold font-sans'>{project.title}</h1>
                  <p className='text-[0.7rem] font-light '>{project.desc}</p>
               </div>
               <LiquidImage image={project.image} overlayz={overlayz} idz={project.id} />
               <div className='project-dot mt-1 text-[0.8rem] font-light font-dancing flex justify-between'>
                  <p>{project.bottomText}</p>
                  <IoArrowUp className='text-textprim text-[1rem]' />
               </div>
            </div>
         ))}


      </div>
   )
}

export default LiquidCard