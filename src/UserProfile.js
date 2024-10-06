import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'


function UserProfile() {
  const Role = localStorage.getItem('Role')
   

  const [Data , setData] = useState([])
  const [VideoInfo , setVedioInfo] = useState([])
  const [loading, setloading] = useState(false)
  
  

    const getVideo = ()=> {

      axios.get('https://trabbitry-backend.vercel.app/api/posts/getvideos').then(res => {
        setVedioInfo(res.data)
        setloading(true)
      }
      ).catch(err => console.log(err))

    }


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
     setData(data)
     getVideo()
  }
  },[])



  
  return (
    <div className='bg-[#f5f5f5] font-Bricolage text-[#182c25] w-full min-h-screen'>


     {/*<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width="320px" height="320px" />*/}
{/* <img alt='pic' src={image1} className='w-[250px] h-[250px]' /> */}

  <div className='px-5 flex py-3 pb-4 justify-between items-center'>
    <div className='text-sm'>
     <h1>Hi! Welcome {Data.Username}</h1>
    </div>

    <div>
      <button className='py-1 px-2 text-xs rounded-e-lg font-Mulish text-white bg-[#182c25]'>Update Profile</button>
    </div>
  </div>    


  <div className='flex justify-center items-center py-1 pb-6 '>
    <h1 className='font-semibold text-center px-3  text-sm md:text-xl '>Learn at Your Pace: Step-by-Step Expert Video Guides.</h1>
  </div>

  <div className='flex justify-center items-center'>
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-Mulish text-[#182c25] gap-5'>
           {  
              VideoInfo.map((info, i) => 

              <div className='bg-white shadow-2xl shadow-[#93a575] rounded-[6px] h-fit w-[300px] 'key={i}>
        
                  <ReactPlayer url={info.URL} width="300px" height="300px" />

                  <div className='flex justify-start pt-[12px] px-3'>
                  <button className='flex items-center bg-[#182c25] text-xs font-Mulish rounded-full px-2 py-1 text-white justify-center'>View</button>
                 </div>
                 <h4 className='px-3 pt-2 text-sm font-bold'>Description</h4>
                 <p className='px-3 pt-1 pb-3 text-xs '>{info.Description}</p> 
                </div>
        
                
              )
           }

  </div>

  

</div>


    {Role ==="Admin"  ? 
    <div className='flex justify-end px-5 font-Mulish sm:pr-[50px] items-center py-5 '>
        <Link to="/posts">
          <button className='flex items-center rounded-full text-sm justify-center text-white bg-[#182c25] py-1 px-2 '>Add Video +</button>
        </Link>
    </div>:
          <div></div> }


    </div>
  )
}

export default UserProfile
