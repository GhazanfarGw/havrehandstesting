import React from 'react';
import Email from './email';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Discover = () => {
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="100" className='items-center lg:mt-0 md:mt-0 mt-16 mx-auto bg-[#0D0D0D] duration-500 border-y border-[#18C4FF] border-opacity-20'>
                <div className='md:px-10 px-5 justify-center text-center md:py-24 py-5 pb-10'>
                    <div className='mx-auto text-[#fff]'>
                        <h1 className='md:text-5xl py-2 text-xl'>
                            Subscribe Our Newsletter
                        </h1>
                        <div className='border-b-2 border-[#0D0D0D] max-w-xs justify-center text-center mx-auto pt-5'>
                            <div className='fourth text-white'>
                                <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;