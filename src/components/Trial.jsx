import React, { useEffect } from 'react';
import "../styles/Trial.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Trial() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false, 
    });
  }, []);
  return (
    <div className='w-full  bg-[#141414] '>
            <div data-aos="fade-up" className='md:container  bg-[#141414] pb-10 xs:px-4 mx-auto mb-0'>
        <div className='back bg-[#1F1F1F]  p-5 rounded-2xl text-white flex flex-wrap xs:text-center lg:text-start justify-around items-center '>
            <div className=''>
                <h1 id='back' className='text-xl font-medium tracking-wider py-4'>Start your free trial today!</h1>
                <p id='back' className='text-[#bdbabafd]' >This is a clear and concise call to action that encourages users to sign up for a free trial of MovieNest.</p>
            </div>
            <div>
            <button id='back' className='py-3 text-[14px] px-8 rounded-md border-2 border-transparent  bg-[#E50000]'>Start a Free Trail</button>
            </div>

        </div>
            </div>
    </div>
  )
}

export default Trial