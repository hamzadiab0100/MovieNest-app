import React, { useState,useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";



const plans = [
    { feature: "Price", basic: "$9.99/Month", standard: "$12.99/Month", premium: "$14.99/Month" },
    { feature: "Content", basic: "Wide selection of movies", standard: "More movies + exclusives", premium: "All movies + offline viewing" },
    { feature: "Devices", basic: "1 device", standard: "2 devices", premium: "4 devices" },
    { feature: "Free Trial", basic: "7 Days", standard: "7 Days", premium: "7 Days" },
    { feature: "Cancel Anytime", basic: "Yes", standard: "Yes", premium: "Yes" },
    { feature: "HDR", basic: "No", standard: "Yes", premium: "Yes" },
    { feature: "Dolby Atmos", basic: "No", standard: "No", premium: "Yes" },
    { feature: "Ad-Free", basic: "No", standard: "Yes", premium: "Yes" },
    { feature: "Offline Viewing", basic: "No", standard: "For select titles", premium: "Yes, all titles" },
    { feature: "Family Sharing", basic: "No", standard: "Up to 5 members", premium: "Up to 5 members" }
];
const planss = {
    basic: {
        price: "$9.99/Month",
        content: "Wide selection of movies",
        devices: "Watch on One device simultaneously",
        freeTrial: "7 Days",
        cancelAnytime: "Yes",
        hdr: "No",
        dolbyAtmos: "No",
        adFree: "No",
        offlineViewing: "No",
        familySharing: "No",
    },
    standard: {
        price: "$12.99/Month",
        content: "More movies + exclusives",
        devices: "Watch on Two device simultaneously",
        freeTrial: "7 Days",
        cancelAnytime: "Yes",
        hdr: "Yes",
        dolbyAtmos: "No",
        adFree: "Yes",
        offlineViewing: "For select titles",
        familySharing: "Up to 5 members",
    },
    premium: {
        price: "$14.99/Month",
        content: "All movies + offline viewing",
        devices: "Watch on Four device simultaneously",
        freeTrial: "7 Days",
        cancelAnytime: "Yes",
        hdr: "Yes",
        dolbyAtmos: "Yes",
        adFree: "Yes",
        offlineViewing: "Yes, all titles",
        familySharing: "Up to 5 members",
    },
};

function Compare() {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-in-out",
          once: false, 
        });
      }, []);

    const [selectedPlan, setSelectedPlan] = useState("Basic");
    
  return (
    <div className='bg-[#141414]'>
        <div  className='md:container text-white  bg-[#141414] pb-10 xs:px-4 mx-auto mb-0'>
            <div>
                <h1 className="xs:text-[24px] md:text-[28px] font-bold tracking-wider px-2">
                Compare our plans and find the right one for you
                </h1>
                <p className="text-wrap px-2 pb-10 py-5 lg:w-[95%]  text-[#c0c0c0]">
                MovieNest offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
                </p>
            </div>
                <div data-aos="fade-up" className=' hidden md:flex border-[#262626]  overflow-x-auto '>
                    <table className="w-full border-collapse border-2  border-[#262626] text-white">
                        <thead >
                        <tr className="bg-[#0F0F0F] ">
                        <th className="border-2 border-t-0 text-start  border-[#262626] px-4 py-3">Features</th>
                        <th className="border-2 border-t-0 text-start  border-[#262626] px-4 py-3">Basic</th>
                        <th className="border-2 border-t-0 text-start  border-[#262626] px-4 py-3">Standard <span className='px-2 py-1 ml-2 rounded-lg bg-[#E50000]'>Popular</span></th>
                        <th className="border-2 border-t-0 text-start  border-[#262626] px-4 py-3">Premium</th>
                    </tr>
                        </thead>
                        <tbody>
                        {plans.map((plan, index) => (
                        <tr key={index} className="text-[#999999]">
                            <td className="border border-[#262626] px-4 py-4">{plan.feature}</td>
                            <td className="border border-[#262626] px-4 py-4">{plan.basic}</td>
                            <td className="border border-[#262626] px-4 py-4">{plan.standard}</td>
                            <td className="border border-[#262626] px-4 py-4">{plan.premium}</td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
                <div className='md:hidden container rounded-xl border-2 border-[#262626] my-10  py-4 px-4 mx-auto mb-10 bg-[#0F0F0F]'>
                    <div className='flex justify-between items-center'>
                        {["Basic","Standard","Premium"].map((plan)=>(
                            <button key={plan}
                            onClick={() => setSelectedPlan(plan)}
                            className={`py-2 px-4  rounded-md border-[#1F1F1F] border-1 transition-all duration-200
                                 ${selectedPlan === plan ?"bg-[#1A1A1A]":"bg-transparent"}  `}
                            >
                                {plan}
                            </button>
                        ))}
                    </div>
                
                </div>
                <div data-aos="fade-up" className='md:hidden container rounded-xl border-2 border-[#262626] my-10  py-4 px-0 mx-auto mb-10 bg-[#0F0F0F]'>
                    <div className='flex justify-center'>
                    {selectedPlan === "Basic" && (
                    <div className='flex gap-10 flex-col justify-center'>
                        <div className='flex items-center px-2  justify-between  '>
                            <div className='flex flex-col'>
                                <h1 className='text-[#999999] text-xl'>Price</h1>
                                <p>{planss.basic.price}</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-[#999999] text-xl'>Free Trail</h1>
                                <p>{planss.basic.freeTrial}</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-col px-2 '>
                            <h1 className='text-[#999999] text-xl'>Contect</h1>
                            <p>{planss.basic.content}</p>
                        </div>
                        <div className='flex flex-col px-2'>
                            <h1 className='text-[#999999] text-xl'>Divices</h1>
                            <p>{planss.basic.devices}</p>
                        </div>
                        <div className='flex items-center px-2   justify-between '>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Cancel Anytime</h1>
                            <p>{planss.basic.cancelAnytime}</p>
                            </div>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>HDR</h1>
                            <p>{planss.basic.hdr}</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center  px-2  justify-between '>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Dolby Atmos</h1>
                            <p>{planss.basic.dolbyAtmos}</p>
                            </div>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Ad - Free</h1>
                            <p>{planss.basic.adFree}</p>
                            </div>
                            
                        </div>
                        <div className='flex items-center  px-2  justify-between gap-10 '>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Offline Viewing</h1>
                            <p>{planss.basic.offlineViewing}</p>
                            </div>
                            <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Family Sharing</h1>
                            <p>{planss.basic.familySharing}</p>
                            </div>
                            
                        </div>
                    </div>
                )}
                {selectedPlan === "Standard" && (
                    <div className='flex gap-10 flex-col justify-center'>
                    <div className='flex items-center  px-2 justify-between  '>
                        <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Price</h1>
                            <p>{planss.standard.price}</p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Free Trail</h1>
                            <p>{planss.standard.freeTrial}</p>
                        </div>
                        
                    </div>
                    <div className='flex flex-col px-2'>
                        <h1 className='text-[#999999] text-xl'>Contect</h1>
                        <p>{planss.standard.content}</p>
                    </div>
                    <div className='flex flex-col px-2'>
                        <h1 className='text-[#999999] text-xl'>Divices</h1>
                        <p>{planss.standard.devices}</p>
                    </div>
                    <div className='flex items-center  px-2  justify-between '>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Cancel Anytime</h1>
                        <p>{planss.standard.cancelAnytime}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>HDR</h1>
                        <p>{planss.standard.hdr}</p>
                        </div>
                        
                    </div>
                    <div className='flex items-center  px-2  justify-between '>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Dolby Atmos</h1>
                        <p>{planss.standard.dolbyAtmos}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Ad - Free</h1>
                        <p>{planss.standard.adFree}</p>
                        </div>
                        
                    </div>
                    <div className='flex items-center  px-2  justify-between gap-10 '>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Offline Viewing</h1>
                        <p>{planss.standard.offlineViewing}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Family Sharing</h1>
                        <p>{planss.standard.familySharing}</p>
                        </div>
                        
                    </div>
                </div>
                )}
                {selectedPlan === "Premium" && (
                    <div className='flex gap-10 flex-col justify-center'>
                    <div className='flex items-center  px-2 justify-between  '>
                        <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Price</h1>
                            <p>{planss.premium.price}</p>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[#999999] text-xl'>Free Trail</h1>
                            <p>{planss.premium.freeTrial}</p>
                        </div>
                        
                    </div>
                    <div className='flex flex-col px-2'>
                        <h1 className='text-[#999999] text-xl'>Contect</h1>
                        <p>{planss.premium.content}</p>
                    </div>
                    <div className='flex flex-col px-2'>
                        <h1 className='text-[#999999] text-xl'>Divices</h1>
                        <p>{planss.premium.devices}</p>
                    </div>
                    <div className='flex items-center px-2   justify-between'>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Cancel Anytime</h1>
                        <p>{planss.premium.cancelAnytime}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>HDR</h1>
                        <p>{planss.premium.hdr}</p>
                        </div>
                        
                    </div>
                    <div className='flex items-center px-2   justify-between '>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Dolby Atmos</h1>
                        <p>{planss.premium.dolbyAtmos}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Ad - Free</h1>
                        <p>{planss.premium.adFree}</p>
                        </div>  
                    </div>
                    <div className='flex items-center  px-2  justify-between gap-10 '>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Offline Viewing</h1>
                        <p>{planss.premium.offlineViewing}</p>
                        </div>
                        <div className='flex flex-col'>
                        <h1 className='text-[#999999] text-xl'>Family Sharing</h1>
                        <p>{planss.premium.familySharing}</p>
                        </div>
                        
                    </div>
                </div>
                )}

                    </div>
                </div>
        </div>

    </div>
  )
}

export default Compare