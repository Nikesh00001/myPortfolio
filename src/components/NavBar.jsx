import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Section is active when 60% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className='shadow-[0_4px_6px_rgba(0,0,0,0.1)] flex flex-row justify-between z-20 items-center h-[10vh] fixed top-0 right-0 left-0 bg-[#ffffff]'>
      <div className='flex flex-row gap-[1vw] ml-[3vw] items-center'>
        <Logo />
        <span className='font-sans font-semibold text-2xl'>Nikesh</span>
      </div>

      <ul className='list-none sm:flex flex-row gap-[3vw] mr-[3vw] font-sans font-semibold text-2xl hidden'>
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`transition-colors ${
                active === section
                  ? 'text-[#843ef3]'
                  : 'text-gray-800 hover:text-[#6d2cd8]'
              }`}
            >
              {section.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      <FaBars className='block sm:hidden text-2xl mr-3' />
    </header>
  );
};

export default NavBar;
