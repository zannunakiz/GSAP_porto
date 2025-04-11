import React from 'react';

const SkillCard = () => {
   const skills = [
      {
         title: "REACT",
         content: "A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES WITH COMPONENT-BASED ARCHITECTURE"
      },
      {
         title: "EXPRESS",
         content: "MINIMALIST NODE.JS WEB FRAMEWORK FOR BUILDING SERVER-SIDE APPLICATIONS AND APIS"
      },
      {
         title: "NODEJS",
         content: "JAVASCRIPT RUNTIME BUILT ON CHROME'S V8 ENGINE FOR BUILDING SCALABLE NETWORK APPLICATIONS"
      },
      {
         title: "THREEJS",
         content: "CROSS-BROWSER JAVASCRIPT LIBRARY FOR CREATING 3D COMPUTER GRAPHICS IN THE BROWSER"
      },
      {
         title: "HTML",
         content: "STANDARD MARKUP LANGUAGE FOR CREATING WEB PAGES AND WEB APPLICATIONS STRUCTURE"
      },
      {
         title: "CSS",
         content: "STYLESHEET LANGUAGE USED FOR DESCRIBING THE PRESENTATION OF HTML DOCUMENTS"
      },
      {
         title: "GSAP",
         content: "HIGH-PERFORMANCE JAVASCRIPT ANIMATION LIBRARY FOR CREATING SMOOTH WEB ANIMATIONS"
      },
      {
         title: "TYPESCRIPT",
         content: "STRONGLY TYPED PROGRAMMING LANGUAGE THAT BUILDS ON JAVASCRIPT WITH TYPE CHECKING"
      },
      {
         title: "NEXTJS",
         content: "REACT FRAMEWORK THAT ENABLES SERVER-SIDE RENDERING AND STATIC WEBSITE GENERATION"
      },
      {
         title: "VUE",
         content: "PROGRESSIVE JAVASCRIPT FRAMEWORK FOR BUILDING USER INTERFACES AND SINGLE-PAGE APPS"
      },
      {
         title: "MONGODB",
         content: "DOCUMENT-ORIENTED NO-SQL DATABASE PROGRAM USING JSON-LIKE SCHEMAS FOR FLEXIBILITY"
      },
      {
         title: "PYTHON",
         content: "HIGH-LEVEL PROGRAMMING LANGUAGE KNOWN FOR ITS READABILITY AND VERSATILE APPLICATIONS"
      },
      {
         title: "AI",
         content: "FIELD OF COMPUTER SCIENCE FOCUSED ON CREATING INTELLIGENT MACHINES AND ALGORITHMS"
      },
      {
         title: "PHP",
         content: "SERVER-SIDE SCRIPTING LANGUAGE ESPECIALLY SUITED FOR WEB DEVELOPMENT AND DEPLOYMENT"
      },
      {
         title: "MYSQL",
         content: "OPEN-SOURCE RELATIONAL DATABASE MANAGEMENT SYSTEM USING SQL FOR DATA ORGANIZATION"
      }
   ];

   return (
      <div className='w-full min-h-screen grid
      
      xl:grid-cols-5 lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 
      xl:gap-y-[60px] xl:gap-x-[12px] lg:gap-y-[40px] lg:gap-x-[20px] md:gap-y-[20px] md:gap-x-0
      xl:px-[30px] xl:py-[80px] lg:px-[50px] lg:py-[100px] md:px-[150px] md:py-[10px] 
      gap-y-[20px] px-[20px] py-[20px]
      '>
         {
            skills.map((skill) => (
               <div className='duration-500 hover:text-black hover:bg-white
               bg-black text-white px-[20px] flex flex-col justify-center gap-[10px] py-[20px] sm:py-[20px]'>
                  <h1 className='font-semibold text-[1.2rem]'>{skill.title}</h1>
                  <p className='font-light text-[0.7rem]'>{skill.content}</p>
                  <hr className='h-[1px] w-[20px] lg:mt-[15px] md:mt-[10px] sm:mt-[5px] bg-gray-200' />
               </div>
            ))
         }
      </div>
   )
}

export default SkillCard