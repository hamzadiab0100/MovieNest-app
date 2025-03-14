import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Foter() {
  return (
    <footer className='bg-[#0F0F0F] text-white'>
      <div className='container py-10 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        <div>
          <h1 className='py-4 '>Home</h1>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Categories</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Devices</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Pricing</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>FAQ</p>
        </div>
        <div>
          <h1 className='py-4 '>Movies</h1>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Gernes</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Trending</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>New Release</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Popular</p>
        </div>
        <div>
          <h1 className='py-4 '>Shows</h1>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Gernes</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Trending</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>New Release</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Popular</p>
        </div>
        <div>
          <h1 className='py-4 '>Support</h1>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Contact Us</p>


        </div>
        <div>
          <h1 className='py-4 '>Subscription</h1>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Plans</p>
          <p className='py-1 text-[#999999] hover:text-[#e0e0e0]  cursor-pointer duration-200'>Features</p>

        </div>
        
        <div>
          <h1 className='py-4'>Connect With Us</h1>
          <div className='flex items-center justify-between my-10'>
           <div className='p-3 bg-[#141414] rounded-xl '>
            <a href="https://www.facebook.com/hmza.dyab.1/"><FaFacebookF className='duration-200 text-white hover:text-[#E50000] '/></a>
            </div>
           <div className='p-3 bg-[#141414] rounded-xl '>
             <a href="https://x.com/"><FaTwitter className='duration-200 text-white hover:text-[#E50000] '/></a>
            </div>
           <div className='p-3 bg-[#141414] rounded-xl '>
             <a href="#"><FaLinkedinIn className='duration-200 text-white hover:text-[#E50000] '/></a>
            </div>
          </div>
        </div>
       
        

      </div>
      <div>
        <hr className='container mx-auto px-4 grid grid-cols-2 opacity-30 md:grid-cols-5 gap-4' />
      </div>
      <div className='text-center container text-[#999999] mx-auto py-4 px-4 flex xs:flex-wrap lg:flex xs:justify-center lg:justify-between items-center'>
        <h1>©2023 MovieNest, All Rights Reserved</h1>
        <div className='flex flex-wrap px-1 justify-center'>
          <h1 className='px-3 hover:text-[#e0e0e0]  cursor-pointer duration-200'>Terms of Use</h1>
          <h1 className='px-3 hover:text-[#e0e0e0]  cursor-pointer duration-200'>Privacy Policy</h1>
          <h1 className='px-3 hover:text-[#e0e0e0]  cursor-pointer duration-200'>Cookie Policy</h1>
        </div>
        
      </div>
 
    </footer>
  )
}

export default Foter