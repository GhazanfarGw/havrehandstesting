import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <>
        <div className='justify-center mx-auto items-center pb-20 bg-[#0D0D0D]'>
            <div className='text-white mx-auto justify-center items-center md:px-10 px-2 max-w-screen-2xl'>
                <div className='md:flex md:grid-cols-2 gap-x-20 md:pt-72 pt-10 max-w-screen-xl mx-auto lg:px-10 px-5'>
                    <div className='max-w-screen-sm'>
                        <h1 data-aos="fade-up" data-aos-delay="100" className='lg:text-5xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Collaborative Approach to Success
                        </h1>
                        <div className='block md:hidden lg:hidden xl:hidden lg:pt-3 pt-5'>
                        <img data-aos="fade-up" data-aos-delay="100" src='./details1-1.jpg' alt='logo'/>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="200" className='text-[#747474] lg:pt-3 pt-5'>
                            At HavreHands, we believe that success is built on collaboration, transparency, and a relentless pursuit of excellence. Our approach is simple yet effective: we listen, we strategize, we execute, and we optimize.
                        </p>
                    </div>
                    <div data-aos="fade-in" data-aos-delay="300" className='hidden md:block lg:block xl:block'>
                        <img src='./details1-1.jpg' alt='logo'/>
                    </div>
                </div>
                <div className='justify-center py-5 items-center lg:pt-32 pt-10'>
                    <div className='px-4'>
                        <div className='md:flex md:flex-row gap-3'>
                            <div data-aos="fade-up" data-aos-delay="200" className='bg-[#1a1e24] hover:bg-[#18C4FF] text-white hover:text-black py-5 px-5 md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Web-development.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Listening
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-black'>
                                    We start by listening to your goals, objectives, and challenges, gaining a deep understanding of your unique needs and requirements.
                                </p>
                            </div>
                            <div data-aos="fade-buttom" data-aos-delay="300" className='bg-[#1a1e24] hover:bg-[#18C4FF] text-white hover:text-black py-5 px-5 md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Strategizing
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-black'>
                                    Based on our initial consultation, we develop a comprehensive strategy that outlines the steps needed to achieve your goals, leveraging the latest technologies and techniques to deliver outstanding results.
                                </p>
                            </div>
                            <div data-aos="fade-in" data-aos-delay="400" className='bg-[#1a1e24] hover:bg-[#18C4FF] text-white hover:text-black py-5 px-5 md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Social Media Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Executing
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-black'>
                                    With a solid strategy in place, we roll up our sleeves and get to work, bringing your vision to life with precision and efficiency.
                                </p>
                            </div>
                            <div data-aos="fade-in" data-aos-delay="500" className='bg-[#1a1e24] hover:bg-[#18C4FF] text-white hover:text-black py-5 px-5 md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Optimizing
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-black'>
                                    We continuously monitor performance, track key metrics, and optimize your campaign to ensure that it delivers the best possible results, helping you achieve your goals and drive growth for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p data-aos="fade-up" data-aos-delay="300" className='px-5 text-[#747474] py-5 md:pt-20 text-sm font-semibold'>
                    Our collaborative approach ensures that every project we undertake is a success, delivering exceptional results that exceed our clients' expectations.
                </p>
            </div>
        </div>
        </>
    );
}

export default About;