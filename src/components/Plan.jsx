import React, { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Plan() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

    const [ismonthly,setIsmonthly] =useState(true);
    const location = useLocation();
    const plan_monthly = [
        {
          id: 1,
          name: "Basic Plan",
          description:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including newly released titles.",
          price: "$9.99/month",
          button1: "Start Free Trial",
          button2:"Choose Plan",
        },
        {
          id: 2,
          name: "Standard Plan",
          description:
            "Access to a wider selection of movies and shows, including major releases and Prime content.",
          price: "$12.99/month",
          button1: "Start Free Trial",
          button2:"Choose Plan",
        },
        {
          id: 3,
          name: "Premium Plan",
          description:
            "Access to the widest selection of movies and shows, including exclusive and on-demand content.",
          price: "$14.99/month",
          button1: "Start Free Trial",
          button2:"Choose Plan",
          
        },
      ];
      const plan_yearly = [
        {
          id: 1,
          name: "Basic Plan",
          description:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including newly released titles.",
          price: "$119.88/year",
          button1: "Start Free Trial",
          button2: "Choose Plan",
        },
        {
          id: 2,
          name: "Standard Plan",
          description:
            "Access to a wider selection of movies and shows, including major releases and Prime content.",
          price: "$155.88/year",
          button1: "Start Free Trial",
          button2: "Choose Plan",
        },
        {
          id: 3,
          name: "Premium Plan",
          description:
            "Access to the widest selection of movies and shows, including exclusive and on-demand content.",
          price: "$179.88/year",
          button1: "Start Free Trial",
          button2: "Choose Plan",
        },
      ];
  return (
    <div className='text-white  bg-[#141414] '>
        <div className={`md:container z-40 py-10 xs:px-4 mx-auto mb-0 ${location.pathname === "/subscription" ?"xs:pt-20 md:pt-24 lg:pt-32":"pt-10"}`}>
             <div className="xs:justify-center xs:text-center flex flex-wrap lg:text-start lg:justify-between lg:flex-nowrap items-center">
                      <div className="text-white">
                        <h1 className="text-[28px] font-bold tracking-wider px-2">
                          {location.pathname ==="/" ? "Explore our wide variety of categories" :"Choose the plan that's right for you"}
                          
                        </h1>
                        <p className="text-wrap px-2 lg:w-[95%]  text-[#c0c0c0]">
                          {location.pathname === "/" ? "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" :"Join MovieNest and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"}
                        </p>
                      </div>
                      <div className=" xs:flex xs:my-4 lg:flex w-[205px] h-[68px] px-4 bg-[#0F0F0F]  justify-around items-center rounded-md border-2 border-[#1F1F1F]">
                        <button
                          className={`py-2 px-4  rounded-md border-[#1F1F1F] border-1 ${
                            ismonthly? "bg-[#1A1A1A]" : "bg-transparent"}`}
                            onClick={()=> setIsmonthly(true)}

                        >
                          Monthly
                        </button>
                        <button
                          className={`py-2 px-4  rounded-md border-[#1F1F1F] border-1 ${
                            ismonthly? "bg-transparent" : "bg-[#1A1A1A]"}`}
                            onClick={()=> setIsmonthly(false)}
                        >
                          Yearly
                        </button>
                      </div>
                    </div>
                <div>
                    {ismonthly? (
                        <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] py-10'>
                            {plan_monthly.map((plan)=>(
                                <div data-aos="fade-up" key={plan.id} className=''>
                                    <div className='bg-[#1A1A1A] border-2 flex justify-center items-center text-center flex-col rounded-md border-[#262626]'>
                                        <h1 className='text-[#ffff] p-8 py-4 pb-2 text-xl font-bold tracking-wide'>{plan.name}</h1>
                                        <p className='p-8 py-2 2xl:text-[20px] text-[#9999] text-[18px]'>{plan.description}</p>
                                        <p className='p-8 py-2 2xl:text-[20px] text-[18px]'>{plan.price}</p>
                                     
                                        <button className='py-3  w-[80%] my-4 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'>{plan.button1}</button>
                                        <button className='py-2  w-[80%] my-4 text-[14px] px-4 rounded-md border-2 border-transparent  bg-[#E50000]'>{plan.button2}</button>
                                      
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] py-10'>
                        {plan_yearly.map((plans)=>(
                                <div data-aos="fade-up" key={plans.id} className=''>
                                <div className='bg-[#1A1A1A] border-2 flex justify-center items-center text-center flex-col rounded-md border-[#262626]'>
                                    <h1 className='text-[#ffff] p-8 py-4 pb-2 text-xl font-bold tracking-wide'>{plans.name}</h1>
                                    <p className='p-8 py-2 2xl:text-[20px] text-[#9999] text-[18px]'>{plans.description}</p>
                                    <p className='p-8 py-2 2xl:text-[20px] text-[18px]'>{plans.price}</p>
               
                                    <button className='py-3 w-[80%] my-4 text-[14px] px-4 rounded-md border-2 border-[#262626] bg-[#141414]'>{plans.button1}</button>
                                    <button className='py-2 w-[80%] my-4 text-[14px] px-4 rounded-md border-2 border-transparent  bg-[#E50000]'>{plans.button2}</button>
                           
                                    
                                </div>
                            </div>
                            ))}
                    </div>
                )}
                </div>

        </div>

    </div>
  )
}

export default Plan