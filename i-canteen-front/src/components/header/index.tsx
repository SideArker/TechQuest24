import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logoZst from '../../assets/zst-logo.png';
import { TextField } from '@mui/material';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [login,setLogin] = useState("")
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
        className={`fixed top-0 left-0 right-0 p-5 z-50 transition-all duration-200 ${isScrolled ? 'bg-[#1d4f91]' : 'bg-[#265da6]'}`}
        style={{ height: isScrolled ? '80px' : '120px' }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center flex-shrink-0 h-full">
          <img src={logoZst} alt="ZST Leżajsk" className="h-full" />
        </div>
        <div className="md:hidden">
          <button className="flex items-center justify-center text-white focus:outline-none">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} absolute md:static inset-x-0 top-full md:flex flex-col md:flex-row items-center justify-end bg-[#1d4f91] md:bg-transparent p-5 md:p-0 transition-all duration-200`}>
          <a href="/" className="text-white text-lg mt-4 md:mt-0 px-5 py-3 md:py-2 md:mr-4">
            Strona główna
          </a>
          <a href="#stolowka" className="text-white text-lg mt-4 md:mt-0 px-5 py-3 md:py-2 md:mr-4">
            Stołówka
          </a>
          <a href={`/konto/${login}`} className="text-white text-lg mt-4 md:mt-0 px-5 py-3 md:py-2">
            Zaloguj się
          </a>
            <TextField onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLogin(event.target.value);
              }} id="outlined-basic" variant="standard" color='primary' sx={{ input: { color: 'darkgray' } }} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
