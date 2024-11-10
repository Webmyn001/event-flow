import axios from 'axios'
import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import {  useNavigate } from 'react-router-dom'

function Upload() {

    const navigate = useNavigate()

    const [Question, setQuestion] =useState("")
    const [URL, setURL] = useState("")
    const [Loading, setLoading] = useState(false)

  
      axios.defaults.withCredentials = true
      const handleSubmit =(e) => {
        e.preventDefault()
        setLoading(true)
        axios.post("https://iab-server.vercel.app/api/post/add", {Question, URL})
        .then(res => {
          console.log(res.data)
          alert('Question succesfully uploaded')
          setLoading(false)
          navigate("/")
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }


  return (
    <div className='bg-[#f5f5f5]  text-[#276221] font-Poppins  w-full min-h-screen'>

<div className='text-center font-bold text-[15px] sm:text-xl '>
      <h1>MSSN OAU</h1>
      <h1>Islamic Affairs Board</h1>
      </div>


           <h1 className='text-center pt-4 text-[#182c25]  font-Mulish pb-2 text-sm md:text-xl font-semibold'>Upload New Questions</h1>
       
<div className='flex justify-center items-center'>
           <form onSubmit={handleSubmit} className='bg-white max-w-[300px] h-fit px-[30px] pb-0 py-[15px] rounded-2xl shadow-xl'>
        <div className='flex flex-col justify-center items-center gap-y-4 py-2  '>
          <textarea type='text' 
            placeholder='Question'
            required
            className='text-[13px] text-[#276221] border-2 border-[#717171]  rounded-md py-2 px-3 w-[270px] h-[150px] focus:outline-0'
            onChange={(e)=> setQuestion(e.target.value)}/>

       <input type='text' 
       placeholder='Telegram Link' 
       required
       className='text-[13px] text-[#276221] border-2  border-[#717171] rounded-md py-1 w-[270px] px-2  focus:outline-0'
       onChange={(e)=> setURL(e.target.value)}/>

  
       
    </div>

    <div className='flex justify-center py-4'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#1a456e" ariaLabel="loading"/> </div> : <button type="submit" className='py-1 px-2 text-[13px] text-center bg-[#276221] text-white rounded-lg'>Upload</button> }
    
    </div>

    </form>
</div>
    </div>
  )
}

export default Upload
