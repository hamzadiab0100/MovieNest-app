import React, { useEffect, useState } from 'react';
import { nav_logo } from '../assets';
import { Link,useLocation} from 'react-router-dom';
import { IoSearchOutline,IoCloseSharp  } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";



function Nav() {
  const location = useLocation();
  const [openbar,setOpenbar]=useState (false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      setOpenbar(false); 
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div
    
    className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent" }`}>
    <nav className='md:container text-white z-40 py-5 flex items-center justify-between xs:px-0.5 mx-auto mb-0'>
        <div className='flex items-center pl-3'>
          <img loading="lazy"  src={nav_logo} alt="nav_logo" className='xs:w-[35px] xs:h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]' />
          <h1 className='px-2 text-2xl font-medium'><Link to="/">MovieNest </Link> </h1>
        </div>
        <div className='hidden lg:flex'>
        <ul className="flex gap-[40px] bg-[#0F0F0F] p-2 px-6 text-white border-4 border-[#1F1F1F] rounded-md">
      <li className={`px-3 py-1.5 rounded-lg ${
        location.pathname === "/" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/">Home</Link>
      </li>
      <li className={`px-3 py-1.5 rounded-lg ${
        location.pathname === "/movies" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/movies">Movies & Shows</Link>
      </li>
      <li className={`px-3 py-1.5 rounded-lg ${
        location.pathname === "/support" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/support">Support</Link>
      </li>
      <li className={`px-3 py-1.5 rounded-lg ${
        location.pathname === "/subscription" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/subscription">Subscriptions</Link>
      </li>
    </ul>
        </div>
        <div className='flex gap-10 px-3'>
        <div className='hidden lg:flex'><IoSearchOutline fontSize={34} /></div>
        <div className='hidden lg:flex'><GoBell  fontSize={34}/></div>
        <div className='flex lg:hidden p-2 py-2 border-[#1F1F1F] border-2 bg-[#1A1A1A] rounded-lg '>
          <button className=' duration-200' onClick={()=> setOpenbar(!openbar)}><HiMenuAlt3 color='#ffff' fontSize={24}/> </button>
           </div>
        
        </div>
    </nav>
    <nav className='flex lg:hidden '  >
        <div  className={`fixed  ease-in-out duration-300  w-full top-0 left-0 transform ${
  openbar  ? "translate-y-0 top-0 "  : "translate-y-[-600px] opacity-100 "}`}>
      <ul className="flex py-5 flex-col items-center gap-[20px] bg-[#000000ef] p-2 px-6 text-white ">
      <button className=' duration-200 absolute mr-[25px] p-2 py-2 border-[#1F1F1F] border-2 bg-[#1A1A1A] rounded-lg  right-0' onClick={()=> setOpenbar(!openbar)}> <IoCloseSharp color='#ffff' fontSize={24} /> </button>
      <li onClick={()=> setOpenbar(!openbar)}  className={`px-3 py-1.5 rounded-lg  ${
        location.pathname === "/" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={()=> setOpenbar(!openbar)}  className={`px-3 py-1.5 rounded-lg  ${
        location.pathname === "/movies" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/movies">Movies & Shows</Link>
      </li>
      <li onClick={()=> setOpenbar(!openbar)}  className={`px-3 py-1.5 rounded-lg  ${
        location.pathname === "/support" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/support">Support</Link>
      </li>
      <li onClick={()=> setOpenbar(!openbar)}  className={`px-3 py-1.5 rounded-lg  ${
        location.pathname === "/subscription" ? "bg-[#1A1A1A]" : "hover:bg-transparent"
      }`}>
        <Link to="/subscription">Subscriptions</Link>
      </li>
    </ul>
        </div>
    </nav>
    </div>
  )
}

export default Nav