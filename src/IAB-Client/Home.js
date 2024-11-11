import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Bars } from 'react-loader-spinner'
import { FaTelegram } from 'react-icons/fa6'

function Home() {


  const [users, setUsers] = useState([])
  const [loading, setloading] =useState(false)




axios.defaults.withCredentials = true;
useEffect(() => {
axios.get("https://iab-server.vercel.app/api/post/get").then(
res => { 
  setUsers(res.data)
  setloading(true)
} 
).catch (err => {
console.log(err)
})
}, [])

  return (
    <div className='bg-[#f5f5f5] pb-[60px] [#2FB95D] font-Poppins text-[#276221] w-full min-h-screen'>
      <div className='text-center font-bold text-[15px] sm:text-xl '>
      <h1>MSSN OAU</h1>
      <h1>Islamic Affairs Board</h1>
      </div>




      <div className='bg-[#f5f5f5] pb-[60px] [#2FB95D] font-Poppins text-[#182c25] w-full min-h-screen'>
     
     <h1 className='text-center sm:text-xl pt-5 pb-2  font-semibold'>Questions & Answers Reference</h1>
     <div className={`flex flex-col ${loading ? "" : "min-h-screen"}   justify-center items-center`}>
        {/* table */}


  
  {loading ? <div></div>:<div className="flex  justify-center items-center text-xl font-bold"><Bars height="100" width="80" radius="10" color="#518300" ariaLabel="loading"/></div>}



   
   
   

     <table className={`text-center  ${loading ? "block" : "hidden"} table-auto mx-2`}>
            <tbody>
            <tr>
                <th className="border border-b-[#717171]  text-sm pb-5 pt-2  px-2">S/N</th>
                <th className="border border-b-[#717171] text-sm  pb-5 pt-2  px-2">Highlight</th>
                <th className="border border-b-[#717171] text-sm pb-5 pt-2  px-2">Link to Answers</th>


            </tr>
       {users.map((info,i)=>
       <tr className=' 'key={i}>
                      <td className="border border-b-[#717171] px-2 text-sm pb-5 pt-2  text-[#717171]">{i+1}</td>
                      <td className="border border-b-[#717171] text-[#717171] truncate max-w-[180px] px-2 text-sm pb-5 pt-2 "> <Link to={ {pathname:`/details/${info._id}`}}  state={info}> {info.Question} </Link></td>
                      <td className="border border-b-[#717171] text-[#717171] px-2 text-sm   pb-5 pt-2 "> <a href={info.URL}><button className=' flex items-center justify-center gap-x-1 px-2 text-sm py-1  rounded-sm'> Telegram <span className='text-[#229ed9]'><FaTelegram/></span></button> </a> </td>
                     
           </tr>
       )}
            </tbody>
         </table>
  

     </div>

   
    </div>


    </div>
  )
}

export default Home
