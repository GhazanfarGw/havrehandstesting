import { Transition } from '@headlessui/react'
import React, { useState, useEffect } from 'react';


function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={`header bottom-0 ${isSticky ? 'top-0 sticky z-20 md:px-10 px-3 w-full duration-300 mx-auto items-center bg-[#0C1F3D] text-white overflow-x-hidden shadow-md md:py-2 scroll-smooth' : ''}`}>
        <div className="mx-auto items-center overflow-x-hidden">
          <div className="flex items-center">
            <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
              <div className="flex-shrink-0 py-2 items-center">
                <a href="/">
                  <img width={210} className='hidden md:block lg:block items-center duration-300' src='./Landscape-logo.png' alt='favicon.png'/>
                  <img width={180} className='block md:hidden lg:hidden items-center duration-300' src='./Landscape-logo.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full duration-200 scroll-smooth">
                <div className="items-center flex duration-200 justify-end mx-auto gap-x-10">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="./home"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Home
                    </a>
                    <a
                      href="./how-we-work"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      How We Work
                    </a>
                    <a
                      href="./services"
                      className="
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Service Overview
                    </a>
                    <a
                      href="./mission"
                      className="
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Mission
                    </a>
                    <a
                      href="./vision"
                      className="
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Vision
                    </a>
                    <a
                      href="./approach"
                      className="
                      items-center text-base md:hover:border-b border-[#18C4FF] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Approach
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@blackmshorse.com" class="items-center text-base border  relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-200 rounded-md text-[#fff]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full pb-10 mt-3 bg-[#0C1F3D] text-white relative" id="mobile-menu">
              <div ref={ref} className="mx-auto z-50 px-5 flex flex-col">
                <a
                  href="./home"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  href="./how-we-work"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  How We Work
                </a>
                <a
                  href="./services"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  Service Overview
                </a>
                <a
                  href="./mission"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  Mission
                </a>
                <a
                  href="./vision"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  Vision
                </a>
                <a
                  href="./approach"
                  className="
                  tracking-wider py-4 flex flex-row items-center justify-between duration-200 border-b border-[#fff] border-opacity-10 text-sm font-bold"
                >
                  Approach
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61556485509174&is_tour_completed=true&_rdc=1&_rdr" 
                  className="text-white tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm " 
                  rel="noreferrer">Facebook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-current stroke-current h-7 w-7"
                      viewBox="0 0 50 50"
                    >
                      <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/great-winchester-investment-ltd/?viewAsMember=true" 
                  className="text-white tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm " 
                  rel="noreferrer">LindedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/havrehands/?next=%2F" 
                  className="text-white tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm " 
                  rel="noreferrer">Instagram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                  >
                    <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/>
                  </svg>
                </a>
                <div>
                  <a href="mailto:info@blackmshorse.com" class="items-center text-base mt-5 text-white bg-[#18C4FF] border relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  )};
export default Navbar;


