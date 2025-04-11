import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const MouseFollow = () => {
   let mouseFollowRef = useRef(null);

   let tl = gsap.timeline();
   let posX = 0
   let posY = 0
   let mouseX = 0
   let mouseY = 0
   let scrollX = 0
   let scrollY = 0

   useEffect(() => {
      gsap.set(mouseFollowRef, { opacity: 0 })
      gsap.to(mouseFollowRef, { opacity: 1, duration: 1 })

      tl.to({}, 0.020, {
         repeat: -1,
         onRepeat: () => {
            posX += (mouseX - posX) / 20;
            posY += (mouseY - posY) / 20;
            tl.set(mouseFollowRef, {
               css: {
                  left: posX - 50,
                  top: posY - 50
               }
            })
         }
      })

      window.addEventListener('mousemove', (e) => {
         scrollX = window.scrollX
         scrollY = window.scrollY
         mouseX = e.pageX - scrollX
         mouseY = e.pageY - scrollY
      })
   }, [])


   return (
      <div ref={el => mouseFollowRef = el} className='fixed top-0 left-0 z-[100]'>
         <img src="img/mouse-follow.png" alt="mouse-follow" className='size-[40px]' />
      </div>
   )
}

export default MouseFollow