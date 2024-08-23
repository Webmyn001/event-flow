import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserProfile() {


  const navigate = useNavigate()
  
  const [Data , setData] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
     setData(data)
  }
  },[])


  const Logout = () => {
    axios.post('https://trabbitry-backend.vercel.app/api/form/logout').then(
      res => {
        console.log(res)
        navigate("/login")
        localStorage.clear()
      }     
    ).catch(err => console.log(err))
}
  return (
    <div className='text-white bg-fuchsia-950 w-full  min-h-screen'>

  <div className='flex pr-5 pt-7 justify-end'>
  <button className='bg-white border-fuchsia-950 px-2 py-1 border-2 rounded-md  text-fuchsia-950' onClick={Logout}>Log out</button>
  </div>

      <h1 className='text-4xl font-bold pt-4 text-center'>Hey! Welcome to Toheeb Rabbitry, Your username is {Data.Username}</h1>
      <h1 className='text-4xl font-bold pt-4 text-center'> Your Email  is {Data.Email}</h1>

      <h1 className='text-2xl font-bold pt-10 text-center'> Thanks for registering with us {Data.Name}</h1>

      

    </div>
  )
}

export default UserProfile
