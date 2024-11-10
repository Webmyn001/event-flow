import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate} from "react-router-dom"
import { AiOutlineDelete } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa6'

function Details() {

    const location = useLocation()
    const data = location.state
    
    const navigate = useNavigate()


    axios.defaults.withCredentials = true
    const deleteUser = async (id) => {
      // i want to do yes or no alert here
      alert("This Question will be deleted")
      try{
        await axios.delete(`https://iab-server.vercel.app/api/post/${id}`);
        alert("Question deleted.")
        navigate("/");
        window.location.reload()
          }
          catch (err) 
      {
      console.log(err);
      alert("Unable to delete, Kindly ensure you are connected to the internet")
       }
    }

  return (
    <div className='bg-[#f5f5f5]  text-[#276221] font-Poppins  w-full min-h-screen'>
   
   <div className='text-center font-bold text-[15px] sm:text-xl '>
      <h1>MSSN OAU</h1>
      <h1>Islamic Affairs Board</h1>
      </div>


  
 <h1 className='text-center pt-4 text-[#182c25]  pb-2 text-sm font-Mulish md:text-xl font-semibold'>Full Details</h1>
   <div className='flex justify-center  items-center py-2 '>
       <div className='bg-white w-[300px] pb-3  pt-3 rounded-2xl shadow-2xl shadow-[#323232] flex flex-col items-center justify-center h-fit'>
        
         <h1 className='pt-4 font-bold text-sm '>Question</h1>
         <h1 className='px-2 text-center text-sm'>{data.Question}</h1>

         <h1 className='pt-8 font-bold text-sm '>Link to Answer</h1>
         <h1 className='px-2 text-center text-xs md:text-sm'><a href={data.URL}><button className=' flex items-center justify-center gap-x-1 px-2 text-sm py-1  rounded-sm'> Telegram <span className='text-[#229ed9]'><FaTelegram/></span></button> </a></h1>

         {console.log(data._id)}
                    {/* buttons */}
         <div className='flex justify-end w-full px-5  mt-8 mb-1 items-center'>
             <button onClick={()=> deleteUser(data._id)}  className='p-[3px] bg-[#276221] text-xl text-white duration-300 transition-colors focus:outline-0 hover:text-[#323232]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'><AiOutlineDelete/> </button>
           </div>
       </div>
</div>
    </div>
  )
}

export default Details