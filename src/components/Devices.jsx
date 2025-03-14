import React, {  useEffect } from 'react';
import { Gaming_Consoles, Laptops, Smart_TV, Smartphones, Tablet, VR } from '../assets';
import "../styles/Devices.css";
import AOS from "aos";
import "aos/dist/aos.css";



const Devices = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <div className='bg-[#141414]'>
      <div className='md:container py-10 pb-15 xs:px-2 mx-auto mb-0'>
        <div className='w-[100%] pb-10'>
          <h1 className='text-white font-bold xs:text-2xl'>
            We Provide you streaming experience across various devices.
          </h1>
          <p className='text-[#c0c0c0] py-2'>
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
          </p>
        </div>

        <div className='grid gap-[30px] xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {[{ img: Smartphones, name: "Smartphones" },
          { img: Tablet, name: "Tablet" },
          { img: Smart_TV, name: "Smart TV" },
          { img: Laptops, name: "Laptops" },
          { img: Gaming_Consoles, name: "Gaming Consoles" },
          { img: VR, name: "VR Headsets" }].map((device, index) => (
            <div  data-aos="fade-up"     key={index} className='card text-white '>
             
                <div className='flex items-center  py-5 '>
                <img className='p-3 bg-[#1A1A1A] rounded-md mr-2 mb-2 w-auto h-auto' loading='lazy' src={device.img} alt={device.name} />
                <h1 className='text-xl font-bold tracking-wide'>{device.name}</h1>
              </div>
              <h2 className='text-[#9999] pb-5'>
                MovieNest is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
              </h2>
              
              
            </div>
          ))}
        </div>


  
      </div>
    </div>
  );
};

export default Devices;
