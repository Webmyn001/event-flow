import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player/youtube'


function UserProfile() {


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
    <div className='bg-[#f5f5f5]  text-[#182c25] w-full min-h-screen'>


   <div className='flex flex-col items-center  justify-center h-[400px]'> 
      <h1 className='text-2xl font-bold py-2  px-2 text-center'>Hey! Welcome to Toheeb Rabbitry.</h1>
         <h1 className='text-xl font-mono pt-3 text-center px-2'> Your username is {Data.Username}.</h1>
      <h1 className='text-2xl font-semibold font-sans pt-4 py-3 px-1 text-center'> Your Email  is {Data.Email}.</h1>
      <h1 className='text-xl text-pretty italic pt-5 font-serif text-center'> Thanks for registering with us, '{Data.Name}.'</h1>
    </div> 

     {/*<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />*/}



           {  
              VideoInfo.map((info, i) => 
        <div className='py-4' key={i}>
                 <div className="flex  justify-center items-center ">
                 <ReactPlayer url={info.URL} width="320px" height="320px" />
                 </div>


           <div className='flex justify-center items-center'>
              <p className='text-center w-[300px] px-2 py-1 font-mono '>{info.Description}</p> 
             </div>
          </div>
                
              )
           }





    </div>
  )
}

export default UserProfile
