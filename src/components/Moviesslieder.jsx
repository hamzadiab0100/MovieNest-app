import React,{useState,useEffect,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import "../styles/Moviesslieder.css";



function Moviesslieder() {
    const [posters,setPosters] =useState([]);
  
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`

    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data =>{
        setPosters(data.results);
    })
    .catch(err => console.error(err));

},[]);
  return (
    <div className='bg-[#141414]  xs:py-14 md:py-32 xs:pb-6 md:pb-4 '>
        <div className='md:container  rounded-2xl  py-10 pb-15 xs:px-2 mx-auto mb-0 '>
            <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }}
             pagination={true}
             loading="lazy"
             loop={false}
             modules={[Autoplay, Pagination]} className="mySwiper">
            {posters.length > 0 ? (posters.slice(0, 12).map((post) => (
            <SwiperSlide key={post.id} className="">
              <div className='w-[100%]'>
              <div id='back1' className="relative w-full h-[80vh] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] bg-cover bg-center bg-no-repeat bg-[#1F1F1F] p-5 rounded-2xl text-white flex flex-col justify-end items-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${post.backdrop_path})` }}>
             <div className=' text-center content   xs:pb-5 pb-10 juste xs:gap-[5px]  gap-[20px]'>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
              <p className='xs:hidden md:flex text-[#9c9c9c]'>{post.overview}</p>
              <div className=' flex items-center justify-center flex-wrap text-center  gap-x-3'>
              <button className='xs:py-3 xs:w-[90%] lg:w-auto xs:px-2 py-3  items-center my-1 text-[14px] px-6 rounded-lg border-2 border-transparent  bg-[#E50000]'> <div className='flex px-4 justify-center '><FaPlay /> <p className='text-xs pl-1'>Play Now</p> </div></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><IoMdAdd fontSize={20} /></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><BiLike fontSize={20} /></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><AiFillSound fontSize={20} /></button>
              </div>
             </div>
              
              </div>

              </div>
            </SwiperSlide>
          ))
        ) : (
            <div className="flex items-center justify-center min-h-screen bg-[#000000] rounded-lg">
            <div className="relative w-6 h-6">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-3 bg-[#E50000] before:content-[''] before:absolute before:border-x-6 before:border-b-[6px] before:border-t-0 before:border-transparent before:top-[-6px] before:left-0 before:right-0 before:border-b-[#5c111100] after:content-[''] after:absolute after:border-x-6 after:border-t-[6px] after:border-b-0 after:border-transparent after:bottom-[-6px] after:left-0 after:right-0 after:border-t-[#5c111100] animate-honeycomb"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    left: ["-28px", "-14px", "14px", "28px", "14px", "-14px", "0px"][
                      i
                    ],
                    top: ["0", "22px", "22px", "0", "-22px", "-22px", "0"][i],
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </Swiper>
        </div>
 
    </div>
  )
}

export default Moviesslieder