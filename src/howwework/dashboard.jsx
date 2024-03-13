import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Dashboard = () => {
    return (
        <>
            <div data-aos="fade-up" data-aos-delay="100" className='duration-500 justify-center'>
                <div className='md:h-80 shadow-2xl'>
                    <img className='duration-500 w-full object-cover md:h-[32rem] rounded-xl' src='./Who we are.jpg' alt='image'/>
                </div>
                <div className='justify-center overflow-hidde pt-8 md:pt-0'>
                    <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
                        <div className=''>
                            <p className='text-[#18C4FF] uppercase'>
                                Havrehands
                            </p>
                            <h1 className='second xl:text-5xl lg:text-5xl text-3xl font-semibold md:text-5xl items-center duration-300 text-[#fff]'>
                                How We Work
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;