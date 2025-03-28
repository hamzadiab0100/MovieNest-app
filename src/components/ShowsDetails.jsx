import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import "../styles/ShowsDetails.css"

function ShowsDetails() {
    const { id } = useParams(); // استخراج الـ ID من الـ URL
    const [tvShow, setTVShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShowsDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch TV details");
                }

                const data = await response.json();
               
                setTVShow(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchShowsDetails();
    }, [id]);

    if (loading) return  <div className="flex items-center justify-center min-h-screen bg-[#000000] ">
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
  </div>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className="bg-[#141414] xs:py-14 md:py-28 xs:pb-6 md:pb-4">
             <div  className='w-[100%] md:container  rounded-2xl  py-5 pb-15 xs:px-2 mx-auto mb-0 '>
              <div id='back2' className="relative lazy-load-image-background blur-0 lazy-load-image-loaded  w-full h-[80vh] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] bg-cover bg-center  bg-no-repeat bg-[#1F1F1F]  p-5 rounded-2xl text-white flex flex-wrap xs:text-center lg:text-start  " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${tvShow.backdrop_path})` }}>
             <div className='  flex w-full flex-col justify-end text-center content xs:pb-5 pb-10 items-center xs:gap-y-[5px]  md:gap-y-[20px]'>
                <h1 className='text-3xl font-bold'>{tvShow.original_name}</h1>
              <p className='xs:hidden md:flex text-[#9c9c9c]'>{tvShow.overview}</p>
              <div className=' flex items-center justify-center flex-wrap text-center  gap-x-3'>
              <button className='xs:py-3 xs:w-[90%] lg:w-auto xs:px-2 py-3  items-center my-1 text-[14px] px-6 rounded-lg border-2 border-transparent  bg-[#E50000]'> <div className='flex px-4 justify-center '><FaPlay /> <p className='text-xs pl-1'>Play Now</p> </div></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><IoMdAdd fontSize={20} /></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><BiLike fontSize={20} /></button>
              <button className='xs:py-2 xs:px-3 py-3 xs:my-1 my-3 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'><AiFillSound fontSize={20} /></button>
              </div>
             </div>
              
              </div>

              </div>
              <div className='w-[90%] container my-10 xs:mx-auto bg-[#1F1F1F] border-2 border-[#262626] rounded-2xl py-5 pb-15 xs:p-0  md:mx-auto mb-0'>
              
    <div className="flex flex-col py-10 md:flex-row gap-6 items-center md:items-start xs:mx-2 lg:px-20">
      
        <img 
            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} 
            alt={tvShow.name} 
            className="w-[250px] md:w-[300px] rounded-lg border-2 border-gray-700"
        />


        <div className="flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-bold">
                {tvShow.original_name}
            </h1>

            <h2 className="text-lg">
                <span className="text-gray-400">First Air Date:</span> {tvShow.first_air_date}
            </h2>

            <h2 className="text-lg">
                <span className="text-gray-400">Status:</span> {tvShow.status}
            </h2>

            <h2 className="text-lg">
                <span className="text-gray-400">Seasons:</span> {tvShow.number_of_seasons} | 
                <span className="text-gray-400"> Episodes:</span> {tvShow.number_of_episodes}
            </h2>

            <h2 className="text-lg">
                <span className="text-gray-400">Rating:</span> <span className="text-green-400">{tvShow.vote_average.toFixed(1)}</span> ⭐ ({tvShow.vote_count} Votes)
            </h2>

            <h2 className="text-lg">
                <span className="text-gray-400">Country:</span> {tvShow.origin_country?.join(", ")}
            </h2>

            <h2 className="text-lg">
                <span className="text-gray-400">Original Language:</span> {tvShow.original_language.toUpperCase()}
            </h2>

            {tvShow.tagline && (
                <h2 className="text-lg italic text-red-500">
                    "{tvShow.tagline}"
                </h2>
            )}

            {tvShow.homepage && (
                <h2 className="text-lg">
                    <span className="text-gray-400">Official Website:</span> 
                    <a href={tvShow.homepage} target="_blank" className="text-blue-400 underline"> Visit Here</a>
                </h2>
            )}
        </div>
    </div>

    

  
    <div className="mt-6 pb-5  xs:px-6 lg:px-20">
        <h2 className="text-white text-lg font-bold">Overview:</h2>
        <p className="text-gray-300">{tvShow.overview}</p>
    </div>
</div>


    
  
</div>
            
      
    );
}

export default ShowsDetails;
