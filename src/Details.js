import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate} from "react-router-dom"

function Details() {

    const location = useLocation()
    const data = location.state
    
    const navigate = useNavigate()

    const deleteUser = async (id) => {
      // i want to do yes or no alert here
      alert("This lecture will be deleted")
      try{
        await axios.delete(`https://trabbitry-backend.vercel.app/api/form/${id}`);
        alert("Data deleted.")
        navigate("/dashboard");
        window.location.reload()
          }catch (err) 
      {
      console.log(err);
      alert("Unable to delete, Kindly ensure you are connected to the internet")
       }
    }

  return (
    <div className='bg-[#f5f5f5]  text-[#182c25] font-Mulish  w-full min-h-screen'>
   
 
  
 <h1 className='text-center pt-4  pb-2 text-sm md:text-xl font-bold'>User Details</h1>
   <div className='flex justify-center  items-center py-2 '>
       <div className='bg-white w-[300px] pb-3  pt-3 rounded-2xl shadow-2xl shadow-[#323232] flex flex-col items-center justify-center h-fit'>
        
         <h1 className='pt-2 font-semibold text-sm '>Name </h1>
         <h1 className='px-2 text-center text-xs'>{data.Name}</h1>

         <h1 className='pt-2 font-semibold text-sm '>Email Address</h1>
         <h1 className='px-2 text-center text-xs md:text-sm'>{data.Email}</h1>

         <h1 className='pt-2 font-semibold text-sm '>Username</h1>
         <h1 className='px-2 text-center text-xs md:text-sm'>{data.Username}</h1>

       
         <h1 className='pt-2 font-semibold text-sm'>Role</h1>
         <h1 className='px-2 text-center text-xs md:text-sm'>{data.Role}</h1>

                    {/* buttons */}
         <div className='flex justify-end w-full px-5  mt-4 mb-2 items-center'>
             <button className='p-[3px] bg-[#182c25]  text-white duration-300 transition-colors focus:outline-0 hover:text-[#323232]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete</button>
           </div>
       </div>
</div>
    </div>
  )
}

export default Details