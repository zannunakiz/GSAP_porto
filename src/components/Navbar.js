import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();

   const handleNavigation = (path) => {
      window.scrollTo(0, 0);
      navigate(path);
   };

   return (
      <nav className='flex font-cormorant justify-end w-screen fixed top-0  right-0 z-[100]'>
         <ul className='pr-[30px] items-end gap-[5px] flex-col  flex text-[1.3rem]'>
            <li to="/" onClick={() => handleNavigation('/')}>Home</li>
            <li to="/about" onClick={() => handleNavigation('/about')}>About</li>
            <li to="/projects" onClick={() => handleNavigation('/projects')}>Projects</li>
         </ul>
      </nav>
   )
}

export default Navbar