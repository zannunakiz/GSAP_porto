import React from 'react'

const Footer = () => {
   return (
      <footer>
         <section className='lg:grid-cols-5 grid-cols-2 border-b border-textprim
         bg-textprim text-white grid  justify-evenly gap-[20px] md:gap-[10px] px-10 xl:px-32 py-16'>

            <div className='justify-center items-center none hidden md:flex'>
               <p className='text-center text-[0.9rem] '>PLEASE CONTACT ME ANYWAY YOU LIKE</p>
            </div>

            <div className='flex flex-col pl-0 lg:pl-10 '>
               <h1 className="font-bold mb-3">SOCIAL</h1>
               <a href="https://google.com">Youtube</a>
               <a href="https://google.com">Instagram</a>
               <a href="https://google.com">Twitter</a>
               <a href="https://google.com">Facebook</a>
               <a href="https://google.com">LinkedIn</a>
               <a href="https://google.com">GitHub</a>
            </div>

            <div className='flex flex-col '>
               <h1 className="font-bold mb-3">CONTACT</h1>
               <a href="https://google.com">richky.abednego@gmail.com</a>
               <a href="https://google.com">+6281270611480</a>
               <a href="https://google.com">WHATSAPP</a>
               <a href="https://google.com">TELEGRAM</a>
            </div>

            <div className='flex flex-col '>
               <h1 className="font-bold mb-3">OTHER MENU</h1>
               <a href="https://google.com">Home</a>
               <a href="https://google.com">About</a>
               <a href="https://google.com">Projects</a>
               <a href="https://google.com">Contact</a>
            </div>

            <div className='flex justify-center items-center '>
               <div className='get-started rounded-full aspect-square text-center h-full flex justify-center items-center'>
                  <h1 className="font-bold text-[0.7rem] md:text-[1rem]">GET STARTED</h1>
               </div>
            </div>
         </section>

         <section className='text-right bg-textprim text-white text-[0.7rem] md:text-[0.9rem] pr-5 border-t border-textprim'>
            <p>&copy; RICHKY ABEDNEGO. ALL RIGHTS RESERVED</p>
         </section>

         <section></section>
      </footer>
   )
}

export default Footer