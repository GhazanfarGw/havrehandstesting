import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function blog() {
  return (
    <>
    <div className='experince'>
        <div className='max-w-screen-xl mx-auto justify-center lg:px-10 px-5 text-white lg:py-36 sm:py-16 py-16 duration-500'>
            <div className='md:flex md:grid-cols-4 mx-auto justify-center'>
                <div className='mx-auto md:border-r md:border-[#18C4FF] md:border-opacity-20 md:pr-10 max-w-screen-sm'>
                    <h1 data-aos="fade-up" data-aos-delay="100" className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl'>
                        Find inspiration in ourblog posts
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="200" className='text-[#747474] pt-5'>
                        In today's digital age, social media has become an indispensable tool for businesses looking to thrive in a highly competitive market. With billions of active users worldwide, platforms like Facebook, Instagram, Twitter, and LinkedIn offer unparalleled opportunities for brands to connect with their audience, build relationships, and drive business growth.
                        At HavreHands, we understand the transformative power of social media marketing and its ability to propel businesses to new heights. In our latest blog post, we delve into the myriad benefits of leveraging social media platforms to unlock success for your business.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="500" className='pt-16 uppercase'>
                        <a className='py-4 px-8 md:border-l-8 border-l-4 border-[#18C4FF] text-sm hover:bg-[#18C4FF] duration-300 bg-[#353535] text-white font-semibold hover:scale-105 transform:translate3d(0%, 0%, 0px)' href='./'>
                            View All Post
                        </a>
                    </div>
                </div>
                <div className='mx-auto justify-center md:pl-10 md:pt-0 lg:pt-0 pt-16'>
                    <p data-aos="fade-up" data-aos-delay="200" className='text-[#747474]'>
                        March 09, 2023
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='lg:text-3xl md:text-2xl sm:text-2xl text-xl pt-2'>
                        Enhanced Brand Visibility
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="200" className='text-[#747474] pt-5 border-[#18C4FF] border-b border-opacity-20 pb-5'>
                        With a strategic social media presence, businesses can significantly increase their brand visibility and reach a wider audience. Engaging content, eye-catching visuals, and targeted advertising campaigns can help amplify your brand's message and attract potential customers.
                    </p>
                    <br/>
                    <p data-aos="fade-up" data-aos-delay="300" className='text-[#747474]'>
                        March 09, 2023
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='lg:text-3xl md:text-2xl sm:text-2xl text-xl pt-2'>
                        Audience Engagement and Interaction
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className='text-[#747474] pt-5 border-[#18C4FF] border-b border-opacity-20 pb-5'>
                        Social media provides a unique opportunity for businesses to engage directly with their audience in real-time. By fostering meaningful conversations, responding to inquiries promptly, and soliciting feedback, businesses can build trust and loyalty among their followers, ultimately driving customer retention and advocacy.
                    </p>
                    <br/>
                    <p data-aos="fade-up" data-aos-delay="400" className='text-[#747474]'>
                        March 09, 2023
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="400" className='lg:text-3xl md:text-2xl sm:text-2xl text-xl pt-2'>
                        Targeted Advertising
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className='text-[#747474] pt-5 border-[#18C4FF] border-b border-opacity-20 pb-5'>
                        Unlike traditional forms of advertising, social media platforms offer advanced targeting options that allow businesses to reach specific demographics, interests, and behaviors. This precision targeting ensures that marketing efforts are directed towards the most relevant audience segments, maximizing ROI and driving conversion rates.
                    </p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default blog