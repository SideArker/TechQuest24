import React, { useState } from 'react';
import  Hamburger  from 'hamburger-react';

const Header = () => {

  return (
    <header className='bg-[#10386b]'>
      <nav className='flex item-center justify-center'>
          <div>
            <span className='text-extrabold text-white text-xl'>MCX STUDIO</span>
          </div>

          <div className='block md:hidden'>
              <button>
                <Hamburger></Hamburger>
              </button>
          </div>
      </nav>
    </header>
  );
}

export default Header;















/*

<header className="bg-[#183c6c]  p-5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">MCX STUDIO</span>
        </div>
        <div className="block md:hidden">
          <button className="text-white focus:outline-none">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} flex-grow md:flex md:items-center justify-end md:w-auto`}>
          <div className="text-md font-bold">
            <a href="#home" className="block mt-4 md:inline-block md:mt-0 text-white mr-4 px-5 py-3">
              Home
            </a>
            <a href="#about" className="block mt-4 md:inline-block md:mt-0 text-white mr-4 px-5 py-3">
              About
            </a>
            <a href="#contact" className="block mt-4 md:inline-block md:mt-0 text-white px-5 py-3">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
    */