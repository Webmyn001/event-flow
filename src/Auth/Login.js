import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatar from "../Images/RabbitLogo.jpg"





function Login() {

  const navigate = useNavigate()
  const [Email, setEmail] =useState("")
  const [Password, SetPassword] = useState("")

  axios.defaults.withCredentials = true;

  const handleSubmit =(e) => {
      e.preventDefault()
      axios.post("http://localhost:4000/api/form/login", {Email,Password})
      .then(res => {
        console.log(res.data)
        localStorage.setItem('data', JSON.stringify(res.data))
         localStorage.setItem('LoggedIn', JSON.stringify(true))

    if(res.data === "No record"){
      alert("No Record found, Kindly Sign up")
    }
        if(res.data.msg === "Success"){
          if(res.data.Role === "Admin") {
            localStorage.setItem('Role', res.data.Role)
            navigate("/dashboard")
          } else {
            localStorage.setItem('Role', res.data.Role)
            navigate("/userprofile")
          }
        }
      }).catch(err => console.log(err))
  }
  return (
    <div className='font-Bricolage'>
        

  <div className='flex bg-[#E5E5E5] min-h-screen w-full justify-center  items-center'>
        <div className='bg-white w-fit px-[15px] pt-[15px] py-[30px] h-fit rounded-[19px] drop-shadow-lg'> 

       <div className='flex justify-center py-4 items-center'>
          <img src={Avatar} alt='avatar' className='w-[80px] h-[80px] rounded-full object-cover'/>
        </div>
          <h1 className='text-[#043A3A]  font-bold pb-5 text-center '>Login to your account</h1>
          <form onSubmit={handleSubmit}>
          <h6 className='text-xs px-[20px]'>Email</h6>
          <div className='flex flex-col justify-center items-center px-[20px] pt-0 gap-y-5 py-2 w-full '>
             <input type='text'
              required
              className='text-[15px] text-black border-[1px] bg-[#FCFCFC]  border-black py-1 px-2 w-[220px] sm:w-[270px] focus:outline-none'
              onChange={(e)=> setEmail(e.target.value)}/>
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
            Login
          </button>
       </div>
          </form>

      

         <h1 className='text-[#043A3A]  text-xs text-center py-4'>Don't have an Account? <Link to="/signin" className='underline text-[14px] font-bold'> Sign up</Link></h1>
      
        </div>
      </div>

    </div>
  )
}

export default Login
