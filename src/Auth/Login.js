import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
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
    <div className='bg-blue-800 min-h-screen w-full'>
        <h1 className='text-center font-semibold text-xl text-white pt-4'>LogIn Page</h1>
        
          <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center gap-y-5 py-10 w-full '>
             <input type='text'
              required
              placeholder='Email'
              className='text-[15px] text-slate-950 border-2 rounded-md py-1 px-2 w-[300px] focus:outline-0'
              onChange={(e)=> setEmail(e.target.value)}/>


             <input type='password'
              placeholder='Password'
              required
              className='text-[15px] text-slate-950 border-2 rounded-md py-1 px-2 w-[300px]  focus:outline-0'
             onChange={(e)=> SetPassword(e.target.value)}/>
          </div>

        <div className='flex justify-center py-5'>
          <button className='py-1 px-2 text-center bg-white text-black rounded-md'>
            Log In
          </button>
       </div>
          </form>
      

          <div className='text-center py-3 text-white'>
            <Link to="/signin">I Don't have an Account</Link>
          </div>

          <div className='text-center py-3 text-white'>
            <Link to="/">Back to Homepage</Link>
          </div>
    </div>
  )
}

export default Login
