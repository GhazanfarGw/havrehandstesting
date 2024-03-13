import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function about() {
  return (
    <>
    <div data-aos="fade-up" data-aos-delay="400" className='px-5 lg:px-10 justify-center max-w-screen-xl mx-auto lg:pt-20 sm:pt-0 pt-0 pb-20 duration-500'>
        <div className='lg:pt-5 sm:pt-20 pt-16'>
            <p className='first text-[#18C4FF] font-bold'>
                About
            </p>
            <h1 className='second lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-white md:pt-3 lg:pt-0'>
                Who We Are
            </h1>
            <p data-aos="fade-in" data-aos-delay="300" className='text-[#747474] lg:pt-10 pt-5'>
                    At HavreHands, we pride ourselves on being a leading digital marketing agency that is committed to delivering unparalleled results for our clients. With a team of highly skilled professionals and a wealth of experience in the industry, we specialize in providing comprehensive digital solutions that drive growth and success.
                <br/><br/>
                    Utilizing cutting-edge technologies, including artificial intelligence, we set higher standards in everything we do. Our dedication to excellence and innovation ensures that every project we undertake is executed with precision and efficiency, delivering exceptional results time and time again.
                <br/><br/>
                As a full-service digital marketing agency, we offer a wide range of services, including web development, social media marketing, search engine optimization, photography, and videography. No matter the size or scope of your project, you can trust HavreHands to deliver outstanding results that exceed your expectations.
            </p>
        </div>
    </div>
    </>
  )
}

export default about