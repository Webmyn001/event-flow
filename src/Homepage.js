import React from 'react'
import { Link } from 'react-router-dom'


function Homepage() {
 
  return (
    <div className='text-white bg-fuchsia-950 w-full min-h-screen'>
       <h1 className='text-3xl font-bold pt-5 text-center'>Hi! Welcome to Toheeb Rabbitry.</h1>
       <h2 className='text-xl font-semibold px-2 py-2 text-pretty text-center pt-[40px]'>In this site we learn how Rear Rabbit in a modern way</h2>

       <h4 className='text-xl font-medium text-center px-2 pt-[50px]'>Kindly click on the bottons below to Sign up or to Log in to the System</h4>

       <div className='flex justify-center px-2 items-center pt-[100px] gap-x-5'>

       <Link to="/signin">
       <button className='bg-white text-fuchsia-950 py-1 px-2 w-[170px] flex
        items-center justify-center hover:bg-fuchsia-950 hover:text-white 
        transition-all duration-700 border border-white rounded-md'>Sign Up</button>
       </Link>
   
        <Link to="/login">
        <button className='bg-white text-fuchsia-950 py-1 px-2 
        w-[170px] flex items-center justify-center hover:bg-fuchsia-950 hover:text-white
         transition-all duration-700 border border-white rounded-md'>Log In</button>
         </Link>

       </div>

      


    </div>
  )
}

export default Homepage
