import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <>
        <div className='justify-center mx-auto items-center lg:pb-40 pb-20 bg-[#0D0D0D]'>
            <div className='text-white mx-auto justify-center items-center md:px-10 px-2 max-w-screen-2xl'>
                <div className='md:pt-72 pt-10 max-w-screen-xl mx-auto lg:px-10 px-5'>
                    <div className='max-w-screen-lg'>
                        <h1 data-aos="fade-up" data-aos-delay="100" className='lg:text-5xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Commitment to Excellence
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className='text-[#747474] lg:pt-3 pt-5'>
                            At HavreHands, our mission is simple: to deliver exceptional results for our clients. We are committed to providing the highest quality digital solutions, tailored to meet the unique needs of each client.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="300" className='text-[#747474] lg:pt-3 pt-5'>
                            With a focus on innovation and excellence, we set higher standards in everything we do. By leveraging artificial intelligence and other advanced technologies, we ensure that every project we undertake is executed with precision and efficiency, delivering outstanding results that exceed our clients' expectations.
                        </p>
                        <p data-aos="left" data-aos-delay="400" className='text-[#747474] lg:pt-3 pt-5'>
                            Our success is measured by the success of our clients, and we are dedicated to going above and beyond to help them achieve their goals. Whether you're looking to build a stunning website, launch a compelling social media campaign, or improve your search engine rankings, you can trust HavreHands to deliver results that drive growth and success for your business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;