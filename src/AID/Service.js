import React, { useEffect } from 'react'
import Image1 from './Image/F4.jpg'
import Image2 from './Image/L2.jpg'
import Image3 from './Image/D4.jpg'
import Image4 from './Image/full-home1.jpg'
import Image5 from './Image/POP3.jpg'
import Image6 from './Image/P3.jpg'
import Image7 from './Image/ST5.jpg'
import Image8 from './Image/FL5.jpg'
import Image9 from './Image/W2.jpg'




import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'



function Service() {
         
    useEffect(()=> {
        AOS.init({duration:2000})
    
    },[])

    const Works = [
        {
            Image : Image1,
            Title : "Furnitures",
            Description : "Home furniture includes essential pieces like sofas, beds, tables, and storage units that offer comfort, organization, and style. It comes in various materials and designs to suit different tastes and needs.",
            Link : "/furnitures"
        },

        {
            Image : Image2,
            Title : "Home Lightning ",
            Description : "Home lighting includes ambient, task, and accent lighting to enhance functionality and atmosphere. It features fixtures like ceiling lights, lamps, and chandeliers, helping to illuminate spaces and create a comfortable, inviting environment.",
            Link : "/lightning"
        },

        {
            Image : Image3,
            Title : " Home Decor",
            Description : "Home decor includes furniture, textiles, and accessories that improve both the look and functionality of a space, reflecting personal style and creating a comfortable, attractive atmosphere.",
            Link : "/decor"
        },


        {
            Image : Image4,
            Title : " Full home Interior",
            Description : "Full home interior involves designing and arranging all spaces in a home, including furniture, decor, lighting, and color schemes, to create a functional, comfortable, and visually appealing environment that reflects personal style.",
            Link : "/home-interior"
        },

        {
            Image : Image5,
            Title : "P.O.P Ceiling",
            Description : "A pop ceiling is a decorative, layered ceiling design made from materials like gypsum or plaster, often used to conceal wires and fixtures while enhancing the room's style and ambiance.",
            Link : "/pop"
        },

        {
            Image : Image6,
            Title : " Wall  Designs",
            Description : "Wall panel design uses materials like wood or PVC to add texture and style to walls, enhancing aesthetics, soundproofing, and hiding imperfections.",
            Link  : "/wall-pannel"
        },

        {
            Image : Image7,
            Title : " Stucco",
            Description : "Stucco is a durable plaster material used for exterior walls, made from sand, cement, lime, and water. It offers a smooth, textured finish, is weather-resistant, fireproof, and energy-efficient",
            Link  : "/stucco"
        },

        {
            Image : Image8,
            Title : "Floor Designs",
            Description : "Floor interior design includes materials like marble, tiles, artificial grass, carpets, and interlocking pavers, each offering unique benefits in style, comfort, and durability.",
            Link : "/floor"
        },

        {
            Image : Image9,
            Title : "Window Setup",
            Description : "Interior window setups, like curtains, blinds, shades, and shutters, enhance privacy, light control, and aesthetics with options for softness, light management, minimalism, and elegance.",
            Link : "/window"
        }
    ]
  return (
    <div>
        <h1 className='text-3xl font-Outfit text-[#251e3d] py-1 font-bold text-center'>Our Service</h1>
         <h3 className='text-2xl py-1 font-Outfit text-[#251e3d] font-bold text-center'>We offer The Best Serivces</h3>
      
        <div className='flex justify-center pt-0 py-4 items-center'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 gap-5  md:grid md:grid-cols-3'>

            {
                Works.map((info, i)=> <div key={i}>
                    <Link to={info.Link} state={info}>
              <div className=' bg-white rounded-t-md shadow-lg mt-3 w-[300px] ' data-aos="flip-right">
                <img src={info.Image} alt={info.Title} className=' w-[370px] rounded-t-lg h-[300px] hover:scale-95  transition duration-500 object-cover' />
 
            <div className='text-center font-raleway '>
                <h1 className='font-semibold  bg-[#99010e] border-b border-[#99010e] hover:bg-white hover:text-[#99010e] text-white text-[18px] py-2 px-1'>{info.Title}</h1>
                <p className='text-[15px] text-[#251e3d] py-1  px-2'>{info.Description}</p>
            </div>

        </div>
            </Link>
                </div>
            )
            }

            
            </div>
        </div>

         
    </div>
  )
}

export default Service
