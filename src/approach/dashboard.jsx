import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function Dashboard() {
  const [scrollPosition, setScrollPosition] = useState (0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const zoomFactor = 100 + scrollPosition / 10;

  return (
    <>

        <div className='approbanner min-h-screen'>
          <div data-aos="zoom-out" data-aos-delay="500" className='background-lines duration-500 top-0 right-0 left-0 mx-auto w-full min-h-screen' style={{ backgroundSize: `${zoomFactor}%` }}>
            <div className='max-w-screen-2xl relative items-center xl:py-[22rem] lg:py-[16rem] md:py-[16rem] pt-[10rem] lg:px-10 px-5 duration-500 justify-center text-center mx-auto grid'>
                <div data-aos="fade-up" data-aos-delay="400" className='w-full mx-auto justify-center'>
                    <img className='max-w-60 md:text-end justify-center mx-auto' src='./Hands.png' alt='herosection'/>
                </div>
                <div
                  className='duration-500'
                  data-aos="fade-up"
                  data-aos-delay="500"
                > 
                  <h1 style={{ fontFamily: 'CustomFont' }} className='text-[#60A7BA] flex uppercase xl:text-8xl lg:text-8xl md:text-7xl text-5xl justify-center text-center mx-auto'>App<span className='border-b border-[#60A7BA]'>roach</span></h1>
                </div>
                <div
                  className='duration-500 pt-5 lg:text-xl text-lg font-medium text-center'
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <p className='text-white uppercase'>Our Collaborative Approach to Success</p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard;