import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='duration-500 justify-center'>
                <div className='md:h-80 shadow-2xl'>
                    <img className='duration-500 w-full object-cover md:h-[32rem] rounded-xl' src='./services.jpeg' alt='image'/>
                </div>
                <div className='justify-center overflow-hidde pt-8 md:pt-0'>
                    <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
                        <div className=''>
                            <p className='text-[#18C4FF] uppercase'>
                                Havrehands
                            </p>
                            <h1 className='second xl:text-5xl lg:text-5xl text-3xl font-semibold md:text-5xl items-center duration-300 text-[#fff]'>
                                Service Details
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;