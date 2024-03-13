// import React from 'react';

// export default function offer() {
//   return (
//     <>
//     <section className='mx-auto justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:py-60 sm:pt-0 pt-0'>
//         <div className='mx-auto justify-center max-w-screen-xl lg:px-10 sm:px-10 md:px-10 px-5'>
//             <div className='mx-auto text-[#fff]'>
//                 <div className='lg:pt-5 sm:pt-20 pt-16'>
//                     <div>
//                         <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#fff] lg:py-5 py-2'>
//                             Our Comprehensive Digital Solutions
//                         </h1>
//                         <p className='text-[#747474] pt-3'>
//                             At HavreHands, we understand that no two businesses are alike, which is why we offer a diverse range of services tailored to meet the unique needs of our clients. From building stunning websites to crafting compelling social media campaigns, our team of experts is dedicated to helping you achieve your goals and stand out in today's competitive digital landscape.
//                         </p>
//                     </div>
//                     <h1 className='lg:text-2xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#fff] pt-20'>
//                         Our services include:
//                     </h1>
//                     <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
//                         <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#18C4FF]'>
//                             Web Development &diams;
//                         </h4>
//                         <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#fff] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
//                             From custom designs to responsive interfaces, we create websites that not only look great but also drive results.
//                         </p>
//                     </div>
//                     <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
//                         <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#18C4FF]'>
//                             Social Media Marketing &diams;
//                         </h4>
//                         <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#fff] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
//                             We develop strategic campaigns and create engaging content to help you connect with your audience and grow your brand.
//                         </p>
//                     </div>
//                     <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
//                         <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#fff]'>
//                             Search Engine Optimization (SEO) &diams;
//                         </h4>
//                         <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#fff] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
//                             Our comprehensive SEO services are designed to improve your online visibility and drive organic traffic to your website.
//                         </p>
//                     </div>

//                     <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
//                         <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#fff]'>
//                             Photography &diams;
//                         </h4>
//                         <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#fff] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
//                             Our professional photographers capture stunning images that showcase your brand in the best possible light.
//                         </p>
//                     </div>

//                     <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
//                         <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#fff]'>
//                             Videography &diams;
//                         </h4>
//                         <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#fff] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
//                             From concept development to post-production, our videography services help bring your vision to life in stunning detail.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }


import React from 'react';

const Ourservices = () => {
    return (
        <>
        <div className='justify-center mx-auto items-center pb-20 bg-[#0D0D0D]'>
            <div className='text-white mx-auto justify-center items-center md:px-10 px-2 max-w-screen-2xl'>
                <div className='md:flex md:grid-cols-2 gap-x-20 md:pt-72 pt-10 max-w-screen-xl mx-auto lg:px-10 px-5'>
                    <div className='max-w-screen-sm'>
                        <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Comprehensive Digital Solutions
                        </h1>
                        <div className='block md:hidden lg:hidden xl:hidden lg:pt-3 pt-5'>
                        <   img src='./details1-1.jpg' alt='logo'/>
                        </div>
                        <p className='text-[#747474] lg:pt-3 pt-5'>
                            At HavreHands, we understand that no two businesses are alike, which is why we offer a diverse range of services tailored to meet the unique needs of our clients. From building stunning websites to crafting compelling social media campaigns, our team of experts is dedicated to helping you achieve your goals and stand out in today's competitive digital landscape.
                        </p>
                    </div>
                    <div className='hidden md:block lg:block xl:block'>
                        <img src='./details1-1.jpg' alt='logo'/>
                    </div>
                </div>
                <div className='justify-center py-5 items-center lg:pt-32 pt-10'>
                    <div className='px-4'>
                        <h1 className='text-xl text-white lg:py-10 py-3'>
                            Our services include
                        </h1>
                        <div className='md:flex md:flex-row gap-3'>
                            <div className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Web-development.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Web Development
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    From custom designs to responsive interfaces, we create websites that not only look great but also drive results.
                                </p>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Social Media Marketing
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                We develop strategic campaigns and create engaging content to help you connect with your audience and grow your brand.
                                </p>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Social Media Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    (SEO)
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    Our comprehensive SEO services are designed to improve your online visibility and drive organic traffic to your website.
                                </p>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Photography
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    Our professional photographers capture stunning images that showcase your brand in the best possible light.
                                </p>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#09121C] text-white py-5 px-5 cursor-wait md:w-80 md:mt-0 mt-5 hover:scale-105 duration-300 transform:translate3d(0%, 0%, 0px);'>
                                <img className='' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='text-lg lg:text-xl font-semibold justify-center lg:pt-5 pt-3'>
                                    Videography
                                </h1>
                                <p className='pt-2 text-sm md:text-base text-[#747474] hover:text-white'>
                                    From concept development to post-production, our videography services help bring your vision to life in stunning detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='px-5 text-[#747474] py-5 pt-20 text-sm font-semibold'>
                    No matter your digital marketing needs, you can trust HavreHands to deliver exceptional results that help your business thrive.
                </p>
            </div>
        </div>
        </>
    );
}

export default Ourservices;