import React from 'react';

const TimerComponent = ({ timerState }) => {
  const { timeRemaining } = timerState;
  return (
    <>
    <div className='relative justify-center mx-auto text-center overflow-hidden lg:px-0 px-5 lg:pt-0 md:pt-0 sm:pt-0 pt-3'>
      <h1 className='uppercase text-[#FDBD31] lg:text-5xl font-semibold sm:text-4xl text-2xl'>
        Website <br/> Under Construction
      </h1>
      <p className='lg:text-base md:text-base text-sm font-normal text-[#969696] pt-3 md:max-w-screen-md lg:max-w-screen-2xl justify-center text-center mx-auto'>
        Sorry for the inconvenience, but we're performing some maintenance at the moment. We'll be back online shortly with a brand new look.
        <br/>
        You can also reach out to us on social media:
      </p>
    </div>
      <div id={timerState.id} className='justify-center mx-auto text-center lg:pt-2 md:pt-2 sm:pt-5 pt-5'>
        <div className='flex justify-center mx-auto text-center text-white grid-cols-4 md:gap-x-10 lg:gap-x-10 sm:gap-x-5 gap-3'>
          <div className=''>
            <p className='text-white lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold'>
              {timeRemaining.days}
            </p>
            <p className='pt-2 lg:uppercase tracking-widest lg:text-sm md:text-sm text-[12px]'>
              Days
            </p>
          </div>

          <div>
            <p className='text-white lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold'>
              {timeRemaining.hours}
            </p>
            <p className='pt-2 lg:uppercase tracking-widest lg:text-sm md:text-sm text-[12px]'>
              Hours
            </p>
          </div>

          <div>
            <p className='text-white lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold'>
              {timeRemaining.minutes}
            </p>
            <p className='pt-2 lg:uppercase tracking-widest lg:text-sm md:text-sm text-[12px]'>
              Minutes
            </p>
          </div>

          <div>
            <p className='text-white lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold'>
              {timeRemaining.seconds}
            </p>
            <p className='pt-2 lg:uppercase tracking-widest lg:text-sm md:text-sm text-[12px]'>
              Seconds
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-7 pt-5 justify-center text-center mx-auto">
        <a 
          target="_black" href="https://twitter.com/BlackStoneSec" 
          className="text-[#FDBD31]
          items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-current stroke-current h-7 w-7"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/>
          </svg>
        </a>
        <a 
          target="_black" href="https://www.facebook.com/profile.php?id=61556485509174&is_tour_completed=true&_rdc=1&_rdr" 
          className="text-[#FDBD31]
          items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-current stroke-current h-7 w-7"
            viewBox="0 0 50 50"
          >
            <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"/>
          </svg>
        </a>
        <a 
          target="_black" href="https://www.instagram.com/havrehands/?next=%2F" 
          className="text-[#FDBD31]
          items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-current stroke-current h-7 w-7"
            viewBox="0 0 50 50"
          >
            <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/>
          </svg>
        </a>
      </div>
      <p className='justify-center text-center mx-auto text-white pt-5 font-semibold'>
        Thank you for your patience!
      </p>
    </>
  
  );
};

export { TimerComponent };