import React, { useState } from 'react';

const Footer = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='footerbg'>
            <div className='max-w-screen-xl mx-auto justify-center md:pt-20 md:pb-10 md:px-10 py-10'>
                <h1 className='text-[#aaa] md:text-base text-sm justify-center pb-5 px-5 '>
                    Website last updated: March 10, 2024
                </h1>
                <div className="py-2 md:px-0 px-2">
                    <a href="/">
                        <img src='./Landscape-logo.png' className='md:w-52 w-52' alt='favicon.png'/>
                    </a>
                </div>
                <div className='md:grid md:grid-cols-5 md:gap-8 max-w-screen-2xl mx-auto justify-center py-5 text-white px-7'>
                    <div className=''>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            A Day with Marketing
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-3'>
                            Start your digital excellence journey today with our unique digital solutions that drive growth and success.
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Contact Us
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            info@havrehands.com
                        </p>
                        <p className='text-sm text-[#C3CDD3] pt-2'>
                            +44 739 888 8433
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Address
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            London Area, United Kingdom
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Quick Links
                        </h1>
                        <div className='pt-4'>
                            <div>
                                <a 
                                    className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/"
                                >
                                    Home
                                </a>
                            </div>
                            <div>
                                <a className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/how-we-work"
                                >
                                    How We Work
                                </a>
                            </div>
                            <div>
                                <a 
                                    className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/services"
                                >   Service Overview
                                </a>
                            </div>
                            <div>
                                <a 
                                    className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/mission"
                                >   Mission
                                </a>
                            </div>
                            <div>
                                <a 
                                    className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/vision"
                                >
                                    Vision
                                </a>
                            </div>
                            <div>
                                <a 
                                    className='text-sm text-[#C3CDD3] md:pt-4 pt-2 pl-2 hover:text-[#18C4FF] hover:font-semibold duration-150' 
                                    href="/approach"
                                >
                                    Approach
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Community
                        </h1>
                        <div className="flex flex-row gap-7 pt-5">
                            <a 
                                target="_black" href="https://www.linkedin.com/in/havre-hands-74b0952b6/" 
                                className="text-[#fff]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#18C4FF]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                </svg>
                                </a>
                                <a 
                                target="_black" href="https://www.facebook.com/profile.php?id=61556485509174&is_tour_completed=true&_rdc=1&_rdr" 
                                className="text-[#fff]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#18C4FF]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"/>
                                </svg>
                                </a>
                                <a 
                                target="_black" href="https://www.instagram.com/havrehands/?next=%2F" 
                                className="text-[#fff]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#18C4FF]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='justify-center mx-auto md:text-center px-5'>
                    <div className='border-b border-[#18C4FF] py-3'/>
                    <p className='md:text-sm text-xs text-[#C3CDD3] md:pt-5 pt-5'>
                        Havrehands &copy; 2024. All right reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;