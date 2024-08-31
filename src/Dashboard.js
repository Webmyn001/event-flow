import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Bars } from 'react-loader-spinner'
import { MdNoEncryptionGmailerrorred } from "react-icons/md"

function Dashboard() {

      const [users, setUsers] = useState([])
      const [loading, setloading] =useState(false)
      const [error, seterror] = useState(false)


        console.log(users)


  axios.defaults.withCredentials = true;
  useEffect(() => {
   axios.get("https://trabbitry-backend.vercel.app/api/form/dashboard").then(
    res => { 
      console.log(res.data)
      res.data === "error" ? setUsers([]) : setUsers(res.data)
      res.data === "error" ? seterror(true) : setUsers(res.data)
      setloading(true)
    } 
   ).catch (err => {
   console.log(err)
   })
  }, [])

  
  return (
    <div className='bg-[#f5f5f5] pb-[60px] text-[#182c25] w-full min-h-screen'>
    <h1 className='text-center font-semibold font-montserat bg-[#182c25]  text-white  py-[2px]'>Admin Dashboard</h1>
     
     <h1 className='text-center sm:text-xl pt-5 pb-2  font-semibold'>List of Users</h1>

     <div className={`flex flex-col ${loading ? "" : "min-h-screen"} ${error ? "min-h-screen" : ""}  justify-center items-center`}>
        {/* table */}


  
  {loading ? <div></div>:<div className="flex  justify-center items-center text-xl font-bold"><Bars height="100" width="80" radius="10" color="#182c25" ariaLabel="loading"/></div>}

  {error ? <div className="flex  justify-center items-center text-xl font-bold"><Bars height="100" width="80" radius="10" color="#182c25" ariaLabel="loading"/></div>: <div></div>}

{


  error ? <div className="text-3xl flex flex-col justify-center items-center font-bold">
    <div className='text-6xl'><MdNoEncryptionGmailerrorred /></div>
      <div className='px-2 py-2 text-center'>You are not authorized to visit this page</div>
   </div> : <div></div>
   }

   
   

     <table className={`text-center ${error ? 'hidden':'block'} ${loading ? "block" : "hidden"} table-auto mx-2`}>
            <tbody className="border border-[#182c25] ">
            <tr className="border border-[#182c25] ">
                <th className="border border-[#182c25]  px-2">S/N</th>
                <th className="border border-[#182c25]">Name</th>
                <th className="border border-[#182c25] px-2">Username</th>


            </tr>
       {users.map((info,i)=>
       <tr className=' 'key={i}>
                      <td className="border border-[#182c25]">{i+1}.</td>
                      <td className="border border-[#182c25] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Name}</Link></td>
                      <td className="border border-[#182c25] hover:text-blue-500 hover:underline px-2"><Link to={ {pathname:`/details/${info.Name}`}}  state={info}>{info.Username}</Link></td>
                     
           </tr>
       )}
            </tbody>
         </table>
  

     </div>

     <Link to="/posts"><button className=' text-center font-bold'>Click here to upload videos</button></Link>
    </div>
  )
}

export default Dashboard
