import hoverEffect from 'hover-effect'
import React, { useEffect } from 'react'

const LiquidImage = ({ image, overlayz, idz }) => {
   useEffect(() => {
      new hoverEffect({
         parent: document.querySelector(`#project-image-${idz}`),
         intensity: 0.3,
         image1: image,
         image2: image,
         displacementImage: overlayz,
      })
   }, [image, overlayz, idz])
   return (
      <div className='flex justify-center items-center w-full h-[200px] md:h-[300px] relative project-image' id={`project-image-${idz}`}>
      </div>
   )
}

export default LiquidImage