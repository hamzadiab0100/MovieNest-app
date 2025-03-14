import react, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Abstract,  } from '../assets';
import "../styles/Hero.css";
import { FaPlay } from "react-icons/fa";
import { useGSAP } from '@gsap/react';


function Hero() {
  const rotate = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rotate.current,
      { rotate:360, },
      { rotate:0, y: 0, duration: 1, ease: "power2.out" ,delay:0.3 }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      box.current,
      { y:70, },
      { y: 0, duration: 1, ease: "power2.out" ,delay:0.3 }
    );
  }, []);

  return (
    <div id='hero'  className='lazy-load-image-background  lazy-load-image-loaded w-full bg-cover bg-center text-white  bg-[#141414] '>
        <div className='md:container h-full z-40 gap-16 flex flex-col justify-center items-center  xs:px-2 mx-auto mb-0'>
            <div
 
            ><img ref={rotate} loading="lazy" src={Abstract} alt="Abstract" className='hero xs:w-[250px] xs:h-[250px] w-[300px] h-[300px]' /></div>
            <div ref={box} className='cotent text-white flex flex-col  text-center justify-center items-center'>
                <h1 className='xs:text-[28px]   font-bold'>The Best Streaming Experience</h1>
                <p className='xs:text-[10px] sl:text-[15px] text-[#c0c0c0] text-wrap min-w-[280px] max-w-[800px]'> MovieNest is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With MovieNest, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <button className='flex gap-4 bg-[#E50000] py-2 px-6 rounded-md items-center mt-4 ease-in-out duration-300 hover:bg-[#d11a1a] '><FaPlay />Start Watching Now</button>
            </div>
        </div>
         
    </div>
  )
}

export default Hero