import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const MouseFollow = () => {
   const mouseFollowRef = useRef(null);
   const posX = useRef(0);
   const posY = useRef(0);
   const mouseX = useRef(0);
   const mouseY = useRef(0);
   const scrollX = useRef(0);
   const scrollY = useRef(0);

   useEffect(() => {
      gsap.set(mouseFollowRef.current, { opacity: 0 });
      gsap.to(mouseFollowRef.current, { opacity: 1, duration: 1 });

      const updatePosition = () => {
         posX.current += (mouseX.current - posX.current) / 20;
         posY.current += (mouseY.current - posY.current) / 20;
         gsap.set(mouseFollowRef.current, {
            css: {
               left: posX.current - 50,
               top: posY.current - 50,
            },
         });
      };

      gsap.ticker.add(updatePosition);

      const handleMouseMove = (e) => {
         scrollX.current = window.scrollX;
         scrollY.current = window.scrollY;
         mouseX.current = e.pageX - scrollX.current;
         mouseY.current = e.pageY - scrollY.current;
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         gsap.ticker.remove(updatePosition); // Clean up the ticker
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div ref={mouseFollowRef} className='fixed top-0 left-0 z-[100]'>
         <img src="img/mouse-follow.png" alt="mouse-follow" className='size-[40px]' />
      </div>
   );
};

export default MouseFollow;