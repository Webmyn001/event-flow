import React,{useEffect, useState} from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import Login from './Login'
import Signup from './Signup'
import Avatar from '../Image/logo.jpg'

import AOS from "aos";
import "aos/dist/aos.css";


const Auth = () => {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])

    const [open , setOpen]= useState("New comment")
    return (
      <div className='min-h-screen font-josefins '>
     
      {/* General Container */}
      <div className='flex justify-center items-center min-h-screen '>
       <div className='flex flex-col shadow-lg w-[350px]  h-fit bg-white  justify-center pb-5 mb-[50px] items-center rounded-[32px]' data-aos="flip-up">
       
       <div className='flex justify-center py-2 items-center'>
          <img src={Avatar} alt='avatar' className='w-[80px] h-[80px] rounded-full object-cover'/>
        </div>

        {/* log in & singn up button div */}
         <div className='buttons flex justify-between mt-[15px]'>
          <button onClick={()=> setOpen("New comment")} className={`${ open ==="New comment"  ? "bg-[#99010e] text-white" : "bg-white  "} focus:outline-0 border-[0.2px] bg-[#99010e] rounded-l-full text-xs px-2 `}>Login</button>
          <button onClick={()=> setOpen("View comment")} className={`${ open ==="View comment"  ? "bg-[#99010e]  text-white" : "bg-white"} focus:outline-0 border-[0.2px] bg-[#99010e] rounded-r-full text-xs px-2 `}>Sign Up</button>
        </div>
        
        {/* from-[#182c25] to-[#1e453e]  */}
        
         {/* login & Sign Up  form */}
         <div className='' data-aos="flip-up">
            {open === "New comment" ? <Login/> : <Signup/>}
         </div>

         

         <div className='flex gap-x-4 text-xl mt-[27px]  w-[220px] justify-center'>
         <a href='https://wa.me/8139116879'>
         <IoLogoWhatsapp className='text-[#128c7e] '/>
         </a>
               
         <a href='tel:+2348139116879'>
         <BsFillTelephoneFill className='text-[#0ebe2c]'/>
         </a>

         <a href="mailto:bellooladimeji53@gmail.com">
         <AiOutlineMail  className="text-[#c71610]"/>
         </a>

         </div>
       </div>
       </div>
      </div>
    )
}

export default Auth