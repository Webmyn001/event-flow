import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function PostVideo() {


    const navigate = useNavigate()

  const [Description, setDescription] =useState("")
  const [URL, setURL] = useState("")

    axios.defaults.withCredentials = true
    const handleSubmit =(e) => {
      e.preventDefault()
      axios.post("https://trabbitry-backend.vercel.app/api/posts/addvideo", {Description, URL})
      .then(res => {
        console.log(res.data)
        alert('Video uploaded succesfully')
        navigate("/dashboard")
      }).catch(err => console.log(err))
  }
  return (
    <div className='bg-[#f5f5f5] font-Mulish pt-[70px] text-[#182c25] w-full min-h-screen'>
 
   <div className='flex flex-col justify-center items-center '>
     <form onSubmit={handleSubmit} className='bg-white px-[30px] pb-0 py-[30px] rounded-2xl shadow-xl'>
     <h1 className='text-center text-[15px] font-bold py-1'> Upload Your Video Accessibly</h1>
        <div className='flex flex-col justify-center items-center gap-y-5 py-4 h-fit w-full '>
          <textarea type='text' 
            placeholder='Description'
            required
            className='text-[13px] text-[#182c25] border-l-2 border-[#182c25]  rounded-md py-1 px-2 w-[300px] h-[150px] focus:outline-0'
            onChange={(e)=> setDescription(e.target.value)}/>

       <input type='text' 
       placeholder='Video URL' 
       required
       className='text-[13px] text-[#182c25] border-b-2  border-[#182c25] rounded-md py-1 w-[300px] px-2  focus:outline-0'
       onChange={(e)=> setURL(e.target.value)}/>

  
       
    </div>

    <div className='flex justify-center py-4'>
    <button type="submit" className='py-1 px-2 text-[13px] text-center bg-[#182c25] text-white rounded-lg'>
      Upload
    </button>
    </div>

    </form>

   </div>
      
    </div>
  )
}

export default PostVideo
