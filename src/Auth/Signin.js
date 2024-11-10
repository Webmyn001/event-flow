import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatar from "../Images/RabbitLogo.jpg"




function Signin() {

  const navigate = useNavigate()

  const [Email, setEmail] =useState("")
  const [Password, SetPassword] = useState("")
  const [Name, setName] = useState("")
  const [Username, SetUsername] = useState("")
  
   
  axios.defaults.withCredentials = true
  const handleSubmit =(e) => {
      e.preventDefault()
      axios.post("http://localhost:4000/api/form/register", {Email,Password, Username, Name})
      .then(res => {
        console.log(res.data)
        alert('User created')
        navigate("/login")
      }).catch(err => console.log(err))
  }
  return (
    <div className='font-Bricolage'>
        
        <div className='flex bg-[#E5E5E5] min-h-screen w-full justify-center  items-center'>
        <div className='bg-white w-fit px-[15px] pt-[5px] py-[30px] h-fit rounded-[19px] drop-shadow-lg'> 

       <div className='flex justify-center py-4 items-center'>
          <img src={Avatar} alt='avatar' className='w-[80px] rounded-full h-[80px] object-cover'/>
        </div>
          <h1 className='text-[#043A3A]  font-bold pb-5 text-center '>SignUp</h1>
          <form onSubmit={handleSubmit}>

          <h6 className='text-xs px-[20px]'>Full Name</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-2 w-full '>
             <input type='text'
              required
              className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-none'
              onChange={(e)=> setName(e.target.value)}/>
          </div>

          <h6 className='text-xs px-[20px]'>Email</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-2 w-full '>
             <input type='text'
              required
              className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-none'
              onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <h6 className='text-xs px-[20px]'>Username</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-2 w-full '>
             <input type='text'
              required
              className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-none'
              onChange={(e)=> SetUsername(e.target.value)}/>
          </div>

          <h6 className='text-xs px-[20px]'>Password</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-3 w-full '>
             <input type='password'
              required
             className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-none'
             onChange={(e)=> SetPassword(e.target.value)}/>
          </div>

        <div className='flex justify-center'>
          <button className='py-2 px-2 text-center w-[220px] sm:w-[270px] bg-[#043A3A]  text-white '>
            SignUp
          </button>
       </div>
          </form>

         <h1 className='text-[#043A3A]  text-xs text-center py-4'>Already a user? <Link to="/login" className='underline text-[14px] font-bold'> Login</Link></h1>
      
        </div>
      </div>

         

    </div>
  )
}

export default Signin
