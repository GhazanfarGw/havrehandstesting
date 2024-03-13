// import { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './style.css';


// AOS.init();

// function Dashboard() {
//   const [scrollPosition, setScrollPosition] = useState (0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };

//   }, []);

//   const zoomFactor = 100 + scrollPosition / 10;

//   return (
//     <>

//     <div className='duration-500 Main-home-page-banner min-h-screen'>
//       <div data-aos="zoom-out" data-aos-delay="500" className='background-image duration-500 top-0 right-0 left-0 mx-auto w-full' style={{ backgroundSize: `${zoomFactor}%` }}>
//         <div className='max-w-screen-xl mx-auto justify-center text-center py-10 lg:px-10 px-5'>
//           <div className='py-80 items-start'>
//             <div data-aos="fade-up" data-aos-delay="300" className='max-w-xs justify-center mx-auto text-center'>
//               <img src='./Hands.png' alt='herosection'/>
//             </div>
//             <div className='max-w-screen-sm mx-auto justify-center text-center' data-aos="fade-up" data-aos-delay="500">
//               <img src='./Name.png' alt='name'/>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//     </>
//   )
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

AOS.init();

function Dashboard() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const zoomFactor = 100 + scrollPosition / 10;

  const slides = [
    { images: ['./Hands.png', './Name.png'] },
    { image: './Hands.png', heading: 'Vision', text: 'Our Vision For The Future' },
    { image: './Hands.png', heading: 'Mission', text: 'Our Commitment to Excellence' },
    { image: './Hands.png', heading: 'Approach', text: 'Our Collaborative Approach to Success' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='duration-500 Main-home-page-banner relative overflow-hidden z-0'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className='background-image duration-500 absolute top-0 left-0 w-full'
          style={{
            backgroundSize: `${zoomFactor}%`,
            display: index === currentSlide ? 'block' : 'none',
            animation: index === currentSlide ? 'fade-in 0.5s ease' : '',
          }}
        >
          <div className='max-w-screen-xl mx-auto justify-center text-center md:min-h-screen md:py-10 lg:px-10 px-5'>
            <div className='md:py-72 items-start py-40'>
              <div className="justify-center">
                {index === 0 ? (
                  <div className="justify-center">
                    <img
                      data-aos="fade-in"
                      data-aos-delay="200"
                      className='lg:max-w-xs max-w-60 mx-auto text-center'
                      src={slide.images[0]} alt='herosection'
                    />
                    <img
                      data-aos="fade-in"
                      data-aos-delay="300"
                      className='lg:max-w-2xl max-w-64 mx-auto text-center'
                      src={slide.images[1]} alt='herosection' />
                  </div>
                ) : (
                  <img
                    data-aos="fade-in"
                    data-aos-delay="200"
                    className='lg:max-w-xs max-w-60 mx-auto text-center'
                    src={slide.image} alt='herosection'
                  />
                )}
              </div>
              <div
                className='max-w-2xl mx-auto text-center'
                data-aos="fade-in"
                data-aos-delay="400"
              >
                <h1 style={{ fontFamily: 'CustomFont' }} className='text-[#60A7BA] uppercase lg:text-7xl text-4xl tracking-widest'>{slide.heading}</h1>
              </div>
              <div
                className='max-w-2xl mx-auto text-center'
                data-aos="fade-in"
                data-aos-delay="600"
              >
                <p className='text-white uppercase lg:text-lg text-xs font-medium'>{slide.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute md:bottom-0 left-0 right-0 text-center mx-auto bottom-60 flex justify-center mb-5">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
      <div className="absolute top-1/2 lg:left-5 transform -translate-y-1/2">
        <button className="text-white lg:px-3 px-2 py-1 rounded-full mr-2" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 lg:right-5 right-2 transform -translate-y-1/2">
        <button className="text-white lg:px-3 px-2 py-1 rounded-full ml-2" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;