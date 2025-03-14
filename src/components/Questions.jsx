import React,{useState} from 'react';
import "../styles/Questions.css";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);
  const movieNestFAQs = [
    {
      id: 1,
      num: "01",
      question: "What is MovieNest?",
      answer: "MovieNest is an online platform where you can explore, discover, and get details about your favorite movies and TV shows."
    },
    {
      id: 2,
      num: "02",
      question: "How can I search for movies on MovieNest?",
      answer: "You can search for movies by title, genre, release year, or even by your favorite actors using our advanced search feature."
    },
    {
      id: 3,
      num: "03",
      question: "Does MovieNest provide movie streaming?",
      answer: "No, MovieNest does not stream movies. We provide detailed information, trailers, and where to watch your favorite movies legally."
    },
    {
      id: 4,
      num: "04",
      question: "How often is MovieNest updated?",
      answer: "MovieNest is updated regularly with the latest movie releases, reviews, trailers, and industry news to keep you informed."
    },
    {
      id: 5,
      num: "05",
      question: "Can I create a watchlist on MovieNest?",
      answer: "Yes, you can create a personalized watchlist to keep track of movies and TV shows you want to watch later."
    },
    {
      id: 6,
      num: "06",
      question: "Is MovieNest free to use?",
      answer: "Yes, MovieNest is completely free to use. You can browse movie details and reviews without any subscription."
    },
    {
      id: 7,
      num: "07",
      question: "Does MovieNest provide movie recommendations?",
      answer: "Yes, based on your watch history and preferences, MovieNest suggests movies and TV shows you might enjoy."
    },
    {
      id: 8,
      num: "08",
      question: "How can I stay updated with MovieNest?",
      answer: "You can subscribe to our newsletter or follow us on social media for the latest updates, trending movies, and special features."
    }
  ];
  return (
    <div className='text-white  bg-[#141414] '>
      <div className='md:container text-white z-40 py-5  xs:px-1 mx-auto mb-0'>
      <div className='w-[100%] pb-10 md:container py-10 pb-15 xs:px-2 mx-auto mb-0'>
          <h1 className='text-white font-bold xs:text-2xl'>
          Frequently Asked Questions
          </h1>
          <p className='text-[#c0c0c0] py-2'>
          Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about MovieNest .
          </p>
        </div>
        <div className='md:container py-10 pb-15 xs:px-2 mx-auto mb-0 grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[10px] items-start '>
        {movieNestFAQs.map((ask,index)=>(

        <div key={ask.id} className='bg-transparent p-4 border-b line  w-[100%] flex-col'>
          <details
          open={openIndex === index}>
            <summary  onClick={(event) => {
                    event.preventDefault(); 
                    setOpenIndex(openIndex === index ? null : index);
                  }} className='flex items-center  justify-between cursor-pointer text-lg font-medium list-none'>
              <div className='flex items-center'> <p className='p-[12px]  py-[8px] pb-[8px] bg-[#1F1F1F] rounded-md'> {ask.num}</p><h1 className='px-5 '>{ask.question}</h1></div>
              <div>
              {openIndex === index ? (
                    <IoIosArrowUp className="text-gray-300" />
                  ) : (
                    <IoIosArrowDown className="text-gray-300" />
                  )}
              </div>
              </summary>
          <p className='p-4 flex-1'>{ask.answer}</p> 
          </details>

        </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default Questions