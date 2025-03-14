import React from 'react'
import { hero_bg } from '../assets'

function Welcome() {
  return (
    <div className='bg-[#141414] xs:py-14 md:py-20 '>
        <div className='md:container bg-cover bg-center xs:text-center lg:text-start   rounded-2xl  py-5 pb-15 xs:px-2 mx-auto mb-0'>
            <h1 className='text-[28px] font-semibold tracking-wider text-white pt-10'>Welcome to our support page!</h1>
            <p className='text-[18px]  pt-2 pb-10 text-[#9999]'>We're here to help you with any problems you may be having with our product.</p>
            <img src={hero_bg} alt="hero_bg" className='w-[100%] bg-[#141414] bg-cover bg-center border-4 border-[#262626]  rounded-2xl   ' />
        </div>
    </div>
  )
}

export default Welcome