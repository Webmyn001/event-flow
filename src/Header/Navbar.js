import React from "react"
import {  useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import image1 from "../Images/Logo.png"



import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"
import axios from "axios";

 function Navbar () {
     
    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}


    const LoggedIn = localStorage.getItem('LoggedIn')
  
    
   console.log(LoggedIn)
  const navigate = useNavigate()

     const HandleLogout = () => {
        axios.post('https://trabbitry-backend.vercel.app/api/form/logout').then(
          res => {
            console.log(res)
            navigate("/login")
            handleClick()
            localStorage.clear()

          }     
        ).catch(err => console.log(err))
    }
    return(
        <div>
            
                     {/* large screen */}
          <div className="bg-[#f5f5f5] flex text-[#182c25] h-[60px]">
            {/* logo */}
            <div className="py-1">
            <Link to="/"> 
              <div className="pl-2 ">
              <img src={image1} alt="logo" className="h-[50px] w-[50px] cursor-pointer rounded-lg"/>
                </div>   
               </Link> 
             </div>
                    

                    {/*  I dont want to mao the links again next time */}
            
             <ul className=" hidden md:flex md:w-full md:px-2 md:gap-x-4 md:justify-end md:items-center">
           <Navlinks />


                   
           {/* Logged out button */}
           {
            LoggedIn === "true" ?
            <button className='bg-white border-[#182c25] px-2 py-1 border-2 rounded-md  text-[#182c25]' onClick={HandleLogout}>Log out</button> : 
            <div></div>
           }
           </ul>

          
          
                          {/* SMALL SCREENS */}
                   <ul className={`md:hidden fixed top-0 z-30 bg-white bg-opacity-95 w-[50%] h-[320px] right-0 shadow-2xl
                  flex flex-col ${LoggedIn ==="true" ? "gap-2" : "gap-6"} text-medium p-7 pt-20 rounded-2xl ease-in-out duration-500
                   ${open ? "top-0" : "top-[-200%]"}`}>
                    <Navlinks alternative={true} handleClick={handleClick} />

                    {/* Log out button */}
                    {
            LoggedIn === "true" ?
            <button className='bg-white border-fuchsia-950 px-2 py-1 border-2 rounded-md  text-fuchsia-950' onClick={HandleLogout}>Log out</button> : 
            <div></div>
           }

                  </ul>
           
                             {/* toggling icon */}
                  <div className="z-50 md:hidden text-[#182c25] cursor-pointer pr-8 flex w-full justify-end items-center" 
                   onClick={handleClick}>
                    {open ? <FaTimes/> : <FaBars/>}
                  </div>
           
     </div>           
          
          
          
          
          
          
          
          
          
          
          
            
            </div>
    )
 }

  export default Navbar