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
                        <h1  data-aos="fade-up" data-aos-delay="100" className='lg:text-5xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Proven Process for Success
                        </h1>
                        <div className='block md:hidden lg:hidden xl:hidden lg:pt-3 pt-5'>
                        <   img  data-aos="fade-up" data-aos-delay="100" src='./details1-1.jpg' alt='logo'/>
                        </div>
                        <p  data-aos="fade-up" data-aos-delay="200" className='text-[#747474] lg:pt-3 pt-5'>
                            At HavreHands, we believe that success is built on collaboration, transparency, and a relentless commitment to excellence. Our proven process ensures that every project we undertake is executed with precision and efficiency, delivering outstanding results for our clients time and time again.
                        </p>
                    </div>
                    <div className='hidden md:block lg:block xl:block'>
                        <img src='./details1-1.jpg' alt='logo'/>
                    </div>
                </div>
                <div className='justify-center py-5 items-center lg:pt-32 pt-10'>
                    <div className='px-4'>
                        <h1 data-aos="fade-up" data-aos-delay="200" className='text-xl text-white lg:py-10 py-3'>
                            Our process includes
                        </h1>
                        <div className='md:flex md:flex-row gap-3'>
                            <div  data-aos="fade-up" data-aos-delay="200" className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Web-development.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Initial Consultation
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    We start by getting to know you and your business, understanding your goals, objectives, and challenges.
                                </p>
                            </div>
                            <div data-aos="fade-buttom" data-aos-delay="300" className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Strategic Planning
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    Based on our initial consultation, we develop a customized strategy tailored to meet your specific needs and objectives.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Social Media Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Implementation
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                With a solid strategy in place, we roll up our sleeves and get to work, leveraging the latest technologies and techniques to bring your vision to life.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500" className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Monitoring and Optimization
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    We continuously monitor performance, track key metrics, and optimize your campaign to ensure that it delivers the best possible results.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600" className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Reporting and Analysis
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    Finally, we provide detailed reports and analysis, giving you insight into the performance of your campaign and the return on your investment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;