import { useState, useEffect } from 'react';
import Hamburger  from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <header 
        className={`p-5 fixed  justify-between w-full z-[999] transition-all duration-200 ${isScrolled ? 'bg-[#1d4f91]' : 'bg-[#265da6]'}`}
        style={{ height: isScrolled ? '80px' : '120px' }}
      >
      <nav className="max-w-6xl mx-auto flex items-center justify-between flex-wrap h-full content-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">LOGO SZKOŁY</span>
        </div>
        <div className="block md:hidden">
          <button className="text-white focus:outline-none">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} flex-grow md:flex md:items-center justify-end md:w-auto`}>
          <div className="text-md font-bold">
            <a href="#home" className="block mt-4 md:inline-block md:mt-0 text-white mr-4 px-5 py-3">
              Strona główna
            </a>
            <a href="#stolowka" className="block mt-4 md:inline-block md:mt-0 text-white mr-4 px-5 py-3">
              Stołówka
            </a>
            <a href="#Opcje" className="block mt-4 md:inline-block md:mt-0 text-white px-5 py-3">
              Konto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
