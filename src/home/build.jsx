import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function build() {
  return (
    <>
    <div className='md:py-28 pt-10 border-t border-[#18C4FF] border-opacity-20 duration-500'>
        <div className='md:flex lg:justify-between mx-auto items-center md:max-w-screen-xl lg:px-10 px-5'>
            <h1 data-aos="fade-up" data-aos-delay="300" className='lg:text-5xl md:text-4xl sm:text-4xl text-xl text-white max-w-screen-sm lg:text-start text-center lg:mx-auto'>
                Let’s build something uniquetogether.
            </h1>
            <div data-aos="fade-up" data-aos-delay="500" className='uppercase md:pt-0 xl:pt-0 lg:pt-0 pt-10 justify-center text-center mx-auto'>
              <a className='py-4 px-8 border-l-8 border-[#18C4FF] text-sm hover:bg-[#18C4FF] duration-300 bg-[#353535] text-white font-semibold hover:scale-105 transform:translate3d(0%, 0%, 0px)' 
                href='./'
              >
                Get In Touch
              </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default build