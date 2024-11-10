import React from "react"
import {  useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../Images/mssn-logo.png"




import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"

 function Navbar () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}


   
    return(
        <div className="font-Poppins">
            
                     {/* large screen */}
          <div className="bg-[#276221] flex text-white h-[60px]">
            {/* logo */}
            <div className="py-1">
            <Link to="/"> 
              <div className="pl-3 ">
              <img src={Logo} alt="logo" className="h-[50px] w-[50px] cursor-pointer object-cover rounded-lg"/>
                </div>   
               </Link> 
             </div>
                    

                    {/*  I dont want to mao the links again next time */}
            
             <ul className=" hidden md:flex md:w-full md:px-2 md:gap-x-4 md:justify-end md:items-center">
           <Navlinks />
           </ul>

          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-[#276221]  w-[100%] h-[100%] right-0 shadow-2xl
                  flex flex-col  text-white justify-center items-center text-xl font-bold p-7 gap-y-7 ease-in-out duration-500
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