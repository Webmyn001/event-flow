import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Avatar from "../Image/Ronaldo2.jpg"
import { Oval } from 'react-loader-spinner'
import Button from './Button'


function Signin() {

  const navigate = useNavigate()

  const [Loading, setLoading] = useState(false);

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
    <form className='w-[280px] mt-[30px]' onSubmit={handleSubmit} encType="multipart/form-data">

    <input placeholder='E-mail Address'  className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] text-[#1c1d1d] ' required/>
    <input placeholder='Username'    className='w-full border-b-[1px]  focus:outline-0 text-[14px] pb-[3.5px] border-[#707070] mt-[24px] text-[#1c1d1d] ' required/>
    <input placeholder='Password'   type='password' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]' required/>
    <input placeholder='Admin key'   type='password' className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#707070] text-[#1c1d1d] mt-[24px]' required/>

    <div className=' text-[#1c1d1d] pt-[8.5px] text-[14px] flex justify-end'>
    </div>
    
     {/* Log in button */}
    <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#1a456e" ariaLabel="loading"/> </div> : <Button name="Sign Up"/>}
     </div>

     </form>
  )
}

export default Signin
