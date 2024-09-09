import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatar from "../Images/Logo.png"





function Login() {

  const navigate = useNavigate()
  const [Email, setEmail] =useState("")
  const [Password, SetPassword] = useState("")

  axios.defaults.withCredentials = true;

  const handleSubmit =(e) => {
      e.preventDefault()
      axios.post("https://trabbitry-backend.vercel.app/api/form/login", {Email,Password})
      .then(res => {
        console.log(res.data)
        localStorage.setItem('data', JSON.stringify(res.data))
         localStorage.setItem('LoggedIn', JSON.stringify(true))

    if(res.data === "No record"){
      alert("No record found, Kindly sign up")
      navigate("/signin")
    }
        if(res.data.msg === "Success"){
          if(res.data.Role === "Admin") {
            navigate("/dashboard")
          } else {
            navigate("/userprofile")
          }
        }
      }).catch(err => console.log(err))
  }
  return (
    <div className=''>
        

  <div className='flex bg-[#E5E5E5] min-h-screen w-full justify-center  items-center'>
        <div className='bg-white w-fit px-[15px] pt-[15px] py-[30px] h-fit rounded-[19px] drop-shadow-lg'> 

       <div className='flex justify-center py-4 items-center'>
          <img src={Avatar} alt='avatar' className='w-[80px] h-[80px] object-cover'/>
        </div>
          <h1 className='text-[#518300] font-bold pb-5 text-center '>Login to your account</h1>
          <form onSubmit={handleSubmit}>
          <h6 className='text-xs px-[20px]'>Email</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-2 w-full '>
             <input type='text'
              required
              className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-0'
              onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <h6 className='text-xs px-[20px]'>Password</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-3 w-full '>
             <input type='password'
              required
             className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-0'
             onChange={(e)=> SetPassword(e.target.value)}/>
          </div>

        <div className='flex justify-center'>
          <button className='py-2 px-2 text-center w-[220px] sm:w-[270px] bg-[#518300] text-white '>
            Login
          </button>
       </div>
          </form>

      

         <h1 className='text-[#518300] text-xs text-center py-4'>Don't have an Account? <Link to="/signin" className='underline text-[14px] font-bold'> Sign up</Link></h1>
      
        </div>
      </div>

        

          <div className='text-center py-3 text-[#518300]'>
            <Link to="/">Back to Homepage</Link>
          </div>
    </div>
  )
}

export default Login
