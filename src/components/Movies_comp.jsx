import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Horror, Drama, Comedy, Adventure, Action, Abstract } from "../assets";
import "../styles/Movies_comp.css";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Movies_comp() {

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-in-out",
          once: false, 
        });
      }, []);

    const navigate = useNavigate();
    const [movielist, setMovielist] = useState([]);
    const [toprated,setToprated] =useState([]);
    const [movies,setMovies] =useState([]);
    
    const swiperRef = useRef(null);
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null);


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(res => res.json())
            .then(data => {
                setMovielist(data.genres || []);
            })
            .catch(err => console.error(err));
    }, []);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
            }
        };

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
               
                setToprated(data.results || []);
            })
            .catch(err => console.error(err));
    }, []);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
            }
        };

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results || []);
            })
            .catch(err => console.error(err));
    }, []);
    

    const genreImages = { Action, Horror, Adventure, Comedy, Drama };

    return (
        <div className='bg-[#141414] py-4 relative pb-20'>
            <h1 className='container absolute xs:ml-[20%] md:ml-[10%] xl2:ml-[20%] text-white py-2 rounded-lg px-5 w-fit bg-[#E50000]'>Movies</h1>
            <div className='text-white border mt-[24px] border-[#262626] pb-4 xs:px-4 mx- mx-10 mb-0 rounded-2xl'>

                {/* Our Genres*/}
                <div className="md:container py-10 xs:px-2 md:px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold tracking-wider px-2">Our Genres</h1>
                        <div className="hidden lg:flex w-[205px] h-[68px] bg-[#0F0F0F] justify-around items-center rounded-md border-2 border-[#1F1F1F]">
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef.current?.slidePrev()}>
                                <FaArrowLeft color="#fff" fontSize={35} />
                            </button>
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef.current?.slideNext()}>
                                <FaArrowRight color="#fff" fontSize={35} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ type: "progressbar" }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            1024:{ slidesPerView: 4 },
                        }}
                        className="mt-6 relative xs:p-1 w-[95%] mx-1"
                    >
                        {movielist.map((genre) => (
                            <SwiperSlide key={genre.id}>
                                <div className="bg-[#1A1A1A] mb-5 flex flex-col p-4 px-6 pb-0 rounded-lg items-center">
                                    <img src={genreImages[genre.name] || Abstract} alt={genre.name} className="xs:w-[200px] xs:h-[240px]  md:w-[240px] md:h-[260px] lg:w-[200px] lg:h-[240px] rounded-lg" />
                                    <div className="flex w-full justify-between items-center">
                                        <h1 className="pt-2 pb-2 text-white text-xl">{genre.name}</h1>
                                        <FaArrowRight color="#fff" fontSize={25} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Top 10 In*/}
                <div className="md:container py-10 xs:px-2 md:px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold tracking-wider px-2">Popular Top 10 In Genres</h1>
                        <div className="hidden lg:flex w-[205px] h-[68px] bg-[#0F0F0F] justify-around items-center rounded-md border-2 border-[#1F1F1F]">
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef1.current?.slidePrev()}>
                                <FaArrowLeft color="#fff" fontSize={35} />
                            </button>
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef1.current?.slideNext()}>
                                <FaArrowRight color="#fff" fontSize={35} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        onSwiper={(swiper) => (swiperRef1.current = swiper)}
                        pagination={{ type: "progressbar" }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            1024:{ slidesPerView: 4 },
                        }}
                        className="mt-6 relative xs:p-1 w-[95%] mx-1"
                    >
                        {movielist.slice(0,10).map((genre) => (
                            <SwiperSlide   key={genre.id}>
                                <div  className="bg-[#1A1A1A] mb-5 flex flex-col p-4 px-6 pb-0 rounded-lg items-center">
                                    <img src={genreImages[genre.name] || Abstract} alt={genre.name} className="xs:w-[200px] xs:h-[240px]  md:w-[240px] md:h-[260px] lg:w-[200px] lg:h-[240px] rounded-lg" />
                                    <div className="flex justify-start w-full">
                                        <h1 className="my-3 py-2 text-sm bg-red-700 rounded-xl px-2">Top 10 In</h1>
                                    </div>
                                    <div className="flex w-full justify-between items-center">
                                        <h2 className="pt-2 pb-2 text-white text-xl">{genre.name}</h2>
                                        <FaArrowRight color="#fff" fontSize={25} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                    {/* top_rated*/}
                    <div className="md:container py-10 xs:px-2 md:px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold tracking-wider px-2">Top Rated</h1>
                        <div className="hidden lg:flex w-[205px] h-[68px] bg-[#0F0F0F] justify-around items-center rounded-md border-2 border-[#1F1F1F]">
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef2.current?.slidePrev()}>
                                <FaArrowLeft color="#fff" fontSize={35} />
                            </button>
                            <button className="py-2 px-4 hover:bg-[#363636] bg-[#1A1A1A] rounded-md" onClick={() => swiperRef2.current?.slideNext()}>
                                <FaArrowRight color="#fff" fontSize={35} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={15}
                        onSwiper={(swiper) => (swiperRef2.current = swiper)}
                        pagination={{ type: "progressbar" }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024:{ slidesPerView: 4 },
                        }}
                        className="mt-6 relative xs:p-1 w-[95%] mx-1"
                    >
                        {toprated.map((rat)=>(
                            <SwiperSlide onClick={() => navigate(`/shows/${rat.id.toString()}`)}
                            style={{ cursor: "pointer" }} key={rat.id}>
                                <div className='bg-[#1A1A1A] mb-5 flex flex-col p-4 px-6 pb-0 rounded-lg items-center'>
                                    <img src={`https://image.tmdb.org/t/p/w500${rat.poster_path}`} className='xs:w-[200px] xs:h-[240px]  md:w-[240px] md:h-[260px] lg:w-[200px] lg:h-[240px] rounded-lg' alt="" />
                                    <div className='flex  my-2 justify-between gap-2'>
                                        <button className='flex xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'>
                                          
                                          
                                          <span className='mrl-2 items-center ' style={{ color: rat.vote_average >= 8 ? 'green' : 'white' }}>
                                          ⭐ {rat.vote_average.toFixed(1)}
                                            </span>
                                        </button>
                                        <button className=' text-xs items-center flex xs:py-2 xs:px-3  py-3 xs:my-1 my-3 text-[14px] px-5 rounded-md border-2 border-[#262626] bg-[#141414]'>
                                           <h1>Votes:</h1> {rat.vote_count}
                                        </button>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                            
                        
                    </Swiper>
                </div>
                {/*movies */}
                <div  className="md:container pb-5 py-10 xs:px-2 md:px-4 mx-auto">
                <div className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold tracking-wider px-2">Must Movies</h1>
                    </div>
                    <div className='grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                        movies.map((movie)=>(
                            <div data-aos="fade-up" className='m-5 ' onClick={() => navigate(`/movies/${movie.id.toString()}`)} key={movie.id}>
                                <img className='w-full h-auto border-2 border-gray-700 rounded-xl hover:scale-105 duration-300 ease-in-out cursor-pointer ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie poster of ${movie.title}`}  />

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Movies_comp;
