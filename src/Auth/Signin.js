import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signin() {

  const navigate = useNavigate()

  const [Email, setEmail] =useState("")
  const [Password, SetPassword] = useState("")
  const [Name, setName] = useState("")
  const [Username, SetUsername] = useState("")
  
   
  axios.defaults.withCredentials = true
  const handleSubmit =(e) => {
      e.preventDefault()
      axios.post("https://trabbitry-backend.vercel.app/api/form/register", {Email,Password, Username, Name})
      .then(res => {
        console.log(res.data)
        alert('User created')
        navigate("/login")
      }).catch(err => console.log(err))
  }
  return (
    <div className='bg-green-600 min-h-screen w-full'>
        <h1 className='text-center font-semibold text-xl text-white pt-4'>Sign Up Page</h1>
        
          <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center gap-y-5 py-7 h-fit w-full '>

             <input type='text'
              placeholder='Full Name'
               required
               className='text-[15px] text-slate-950 border-2 rounded-md py-1 px-2 w-[300px] focus:outline-0'
               onChange={(e)=> setName(e.target.value)}/>

             <input type='text' 
             placeholder='Email'
              required
              className='text-[15px] text-slate-950 border-2 rounded-md py-1 px-2 w-[300px] focus:outline-0'
              onChange={(e)=> setEmail(e.target.value)}/>

             <input type='text' 
             placeholder='Username' 
             required
             className='text-[15px] text-slate-950 border-2 rounded-md py-1 w-[300px] px-2  focus:outline-0'
             onChange={(e)=> SetUsername(e.target.value)}/>

             <input type='password'
              placeholder='Password'
              required
              className='text-[15px] text-slate-950 border-2 rounded-md py-1 px-2 w-[300px] focus:outline-0'
              onChange={(e)=> SetPassword(e.target.value)}/>
             
          </div>

          <div className='flex justify-center py-3'>
          <button type="submit" className='py-1 px-2 text-center bg-white text-black rounded-md'>
            Sign Up
          </button>
          </div>

          </form>

         <div className='text-center py-3 text-white'>
      <Link to="/login">Already have an Account</Link>
      </div>  

      <div className='text-center py-2 text-white'>
      <Link to="/">Back to Homepage</Link>
      </div>
         

    </div>
  )
}

export default Signin
