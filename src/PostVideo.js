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
        navigate("/")
      }).catch(err => console.log(err))
  }
  return (
    <div className='bg-[#f5f5f5] pb-[60px] text-[#182c25] w-full min-h-screen'>
      
      <h1 className='text-center font-semibold font-montserat bg-[#182c25]  text-white  py-[2px]'> Upload Video</h1>

 
      <Link to="/dashboard"><button className=' pl-6 font-bold'>back to dashboard</button></Link>
      
    <h1 className='text-[#182c25] px-3 pt-5 py-3 text-center font-mono'> Hey! Welcome Admin, Your students are waiting for you to Upload new video</h1>
    <h3 className='text-[#182c25] px-2mpx-3 text-center font-mono'> Kindly fill the form below to upload video</h3>
   
      <form onSubmit={handleSubmit}>
    

          <div className='flex flex-col justify-center items-center gap-y-5 py-7 h-fit w-full '>

            

             <textarea type='text' 
             placeholder='Description'
              required
              className='text-[15px] text-slate-950 border-l-2 border-[#182c25]  rounded-md py-1 px-2 w-[300px] h-[150px] focus:outline-0'
              onChange={(e)=> setDescription(e.target.value)}/>

             <input type='text' 
             placeholder='Video URL' 
             required
             className='text-[15px] text-slate-950 border-b-2  border-[#182c25] rounded-md py-1 w-[300px] px-2  focus:outline-0'
             onChange={(e)=> setURL(e.target.value)}/>

        
             
          </div>

          <div className='flex justify-center py-3'>
          <button type="submit" className='py-1 px-2 text-center bg-[#182c25] text-white rounded-md'>
            Upload Video
          </button>
          </div>

          </form>

    </div>
  )
}

export default PostVideo
