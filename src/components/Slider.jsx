import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Horror, Drama, Comedy, Adventure, Action, Abstract } from "../assets";
import { useState,useEffect } from "react";





function Slider() {

  const [movielist,setMovielist] =useState([]);
  
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`

    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(res => res.json())
    .then(data =>{
     
      setMovielist(data.genres);
    })
    .catch(err => console.error(err));

},[]);
const genreImages = { Action, Horror, Adventure, Comedy, Drama };


  const swiperRef = useRef(null);
  return (
    <div className="bg-[#141414]">
      <div className="md:container z-40 py-10 xs:px-2 mx-auto mb-0">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-[28px] font-bold tracking-wider px-2">
              Explore our wide variety of categories
            </h1>
            <p className="text-wrap px-2 text-[#c0c0c0]">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <div className="hidden lg:flex w-[205px] h-[68px] bg-[#0F0F0F]  justify-around items-center rounded-md border-2 border-[#1F1F1F]">
            <button
              className="py-2 px-4 bg-[#1A1A1A] rounded-md border-[#1F1F1F] border-1"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft color="#ffff" fontSize={35} />
            </button>
            <button
              className="py-2 px-4 bg-[#1A1A1A] rounded-md border-[#1F1F1F] border-1"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight color="#ffff" fontSize={35} />
            </button>
          </div>
        </div>
        <div>
        <Swiper
  modules={[Navigation]}
  slidesPerView={1}
  spaceBetween={15} 
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  navigation={false} 
  breakpoints={{
    320: { slidesPerView: 2 }, 
    480: { slidesPerView: 2 }, 
    640: { slidesPerView: 3 },    
    768: { slidesPerView: 4 }, 
  }}
  className="mt-6 py-4   xs:p-1 mb-4 w-[95%] mx-1" 
> 
            {movielist.filter((_, index) => index !== 5).map((genre) => (
              <SwiperSlide key={genre.id} >
              
                <div className="bg-[#1A1A1A] flex flex-col   p-4  px-6 pb-0 rounded-lg  items-center justify-center">
                  <img loading="lazy" src={genreImages[genre.name] || Abstract}  alt="Category" className="   xs:w-[89px] xs:h-[97px] sl:w-[140px] sl:h-[150px] md:w-[120px] md:h-[130px] lg:w-[190px] lg:h-[200px] rounded-lg" />
                  <div className="flex w-full justify-between items-center">
                    <h1 className="pt-2 pb-2  text-white text-xl" >{genre.name}</h1>
                    <FaArrowRight color="#ffff" fontSize={25} />
                    </div>
                </div>
             
                
              </SwiperSlide>
 ))}
            
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
