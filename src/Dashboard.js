import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Dashboard() {

  const navigate = useNavigate()
   const [users, setUsers] = useState([])

  axios.defaults.withCredentials = true;

  useEffect(() => {
   axios.get("https://trabbitry-backend.vercel.app/api/form/dashboard").then(
    res => { 
      console.log(res.data)
      setUsers(res.data)
    } 
   ).catch (err => console.log(err))
  }, [])

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
    <div className='text-white bg-fuchsia-950 w-full  min-h-screen '>
      <h1 className='text-center font-bold pt-4 text-4xl'>Welcome to Admin Dashboard</h1>

      <div className='flex pr-5 justify-end'>
      <button className='bg-white border-fuchsia-950 px-2 py-1 border-2 rounded-md  text-fuchsia-950' onClick={Logout}>Log out</button>
      </div>

      <h1 className='text-xl font-bold py-2 text-center'>List of all Users</h1>
     <div className='flex flex-col gap-5 justify-center items-center '>
      {users.map((info,i)=>
       <div className=' border-white border-2 h-fit w-[200px] flex flex-col gap-2 py-2 px-2 justify-center items-center rounded-md shadow-xl'key={i}>
                      <h1>{i+1}.</h1>
                      <h1>{info.Name}</h1>
                      <h1>{info.Usename}</h1>
                      <h1>{info.Email}</h1>
                      <h1>Role : {info.Role}</h1>
           </div>
       )}
      </div>

    </div>
  )
}

export default Dashboard
