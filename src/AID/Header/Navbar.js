import React from "react"
import {  useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../Image/logo.jpg"




import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"

 function Navbar () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}


   
    return(
        <div className="font-Outfit">
            
            <div className="bg-white text-[13px] font-raleway text-[#251e3d] sm:text-[17px] px-2 py-2 sm:py-3 flex justify-between items-center sm:px-5 ">
              <h2>AYOOLA INTERIOR DESIGNS LTD</h2>
               <h2 className="font-Playwrite">RC Number: <span className="font-raleway">81107020</span></h2>
            </div>
                     {/* large screen */}
          <div className="bg-[#99010e] flex  text-white h-[65px]">
            {/* logo */}
            <Link to="/"> 

          <div className="py-1 flex justify-between items-center gap-x-2">
              <div className="pl-3 ">
              <img src={Logo} alt="logo" className="h-[50px] w-[50px] cursor-pointer object-fit rounded-lg"/>
                </div>   
          </div>
          </Link> 

            

                    {/*  I dont want to mao the links again next time */}
            
             <ul className=" hidden md:flex md:w-full md:px-2 md:gap-x-4 md:justify-end md:items-center">
           <Navlinks />
           </ul>

          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-[#99010e]  w-[100%] h-[100%] right-0 shadow-2xl
                  flex flex-col  text-white justify-center items-center text-xl font-bold  gap-y-3 ease-in-out duration-500
                   ${open ? "top-0" : "top-[-200%]"}`}>
                    <Navlinks alternative={true} handleClick={handleClick} />
                  </ul>
           
                             {/* toggling icon */}
                  <div className="z-50 md:hidden text-white cursor-pointer pr-8 flex w-full justify-end items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>
           
     </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Navbar