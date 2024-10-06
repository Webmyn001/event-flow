import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosStar } from 'react-icons/io'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'

import Image from "./Images/rabbit7.jpg"



// What we offer Images
import Offer1 from "./Images/rabbit11.jpg"
import Offer2 from "./Images/rabbit8.avif"
import Offer3 from "./Images/rabbit9.jpg"
import Offer4 from "./Images/rabbit12.jpg"
import Offer5 from "./Images/rabbit5.jpg"




function Homepage() {

   const Offer = [
     {
      Img : Offer1,
      Heading : "Quality Breeding",
      Paragraph : "Quality rabbit breeding emphasizes selecting healthy, genetically sound stock to produce strong, well-tempered offspring. By focusing on proper care and nutrition, breeders enhance the overall health and vitality of their rabbits."
     },

     {
      Img : Offer2,
      Heading : "Quality Feeding",
      Paragraph : "Effective rabbit feeding involves providing a balanced diet rich in hay, fresh vegetables, and pellets to support their health. Proper nutrition ensures optimal growth, digestion, and overall well-being in rabbits."
     },


     {
      Img : Offer3,
      Heading : "Quality Care",
      Paragraph : "Providing quality care for rabbits involves maintaining a clean habitat, conducting regular health assessments, and ensuring social interaction. This attentive approach fosters their overall health and happiness."
     },

     {
      Img : Offer4,
      Heading : "Rabbit Distribution",
      Paragraph : "We specialize in rabbit distribution, providing a range of breeds at affordable prices for both commercial buyers and local consumers."
     },

     {
      Img : Offer5,
      Heading : "Profit Maximization",
      Paragraph : "Maximizing profit in rabbit farming involves optimizing breeding efficiency, maintaining high-quality feed, and effectively managing costs. By focusing on these areas, breeders can enhance productivity and ensure sustainable financial success."
     },
   ]



  const Faqs = [
    {
      Question : "What benefits do I gain by enrolling in this rabbit training program?",
      Answer: "By enrolling in our rabbit training program, you'll gain expert knowledge on rabbit breeding, care, management, as well as practical skills for optimizing rabbit productivity, and increased confidence and competence in rabbit farming."
    },

    {
      Question : "Is investing in rabbit farming a profitable venture?",
      Answer: "Yes, of course! rabbit farming can be highly profitable due to growing demand for rabbit meat and by-products, Low initial investment and operational costs, and fast breeding cycle and high reproductive rate."
    },

    {
      Question : "What market opportunities exist for rabbit products?",
      Answer: "Rabbit products have various market oppurtunities, including: Local and international markets, speciality food stores and restaurants, value-added products(e.g., rabbit fur hats, gloves), potential for export to countries with high demand and so on."
    },


    {
      Question : "How long does it take to start seeing profits from rabbit farming?",
      Answer: "Typically, rabbit farming can generate profits within 6-12 months after initial investment, considering factors like breed selection, feed quality, and market demand. Our training program helps optimize your operations for faster returns."
    },


    {
      Question : "Can I start rabbit farming on a small scale, and still be succesful?",
      Answer: "Absolutely! Small-scale rabbit farming can be profitable, especially with focused management and marketing. Our program provides scalable solutions for farmers of all sizes."
    },


    {
      Question : "How do I ensure the health and well-being of my rabbits?",
      Answer: "Ensuring rabbit health requires proper housing, nutrition, vaccination, and parasite control. Our training program covers best practices for rabbit care, health monitoring, and disease prevention."
    },

    {
      Question : "What are the best foods for rabbits, and what should be avoided?",
      Answer: "Rabbits thrive on a diet that includes Timothy hay, alfalfa hay, leafy greens (such as lettuce, spinach, and kale), fresh vegetables (like carrots and bell peppers), and limited amounts of pellets specifically formulated for rabbits. It’s important to avoid high-sugar foods, processed foods, items high in salt, and chocolate and avocado."
    },

  ]
 
  return (
    <div className=' bg-[#f5f5f5] w-full min-h-screen'>
 

   <div  className=' md:flex gap-x-8  md:justify-center md:items-center  justify-center items-center flex flex-col md:flex-row '>
      
      <div>
          <img src={Image} alt="Homepage"  className="h-[350px] sm:h-[450px] object-cover w-full  sm:rounded-none rounded-b-3xl"/>
      </div>

      <div>
        <div className='w-[310px]  md:w-[350px]'>
             {/* typrwriter of "Hi/Hello, Welcome!" here */}
           
         <h1 className='font-Bricolage text-[#043A3A] pt-1 text-3xl font-bold sm:text-5xl  '>Toheeb<span className='text-[#2FB95D]'> Rabbitry</span></h1>

         <p className='text-sm md:text-[16px] pt-2 font-Mulish text-[#043A3A] font-bold '>Transform your rabbit's behavior with our expert training guidance. Take the leap and enroll in our effective rabbit training courses today!</p>
       </div>

                                         {/* Get started and enroll now button */}
    <div className='flex gap-x-[40px] md:gap-x-[50px] mt-[35px]'>
         <Link to="/signin">
         <button className='px-3 py-2 bg-[#2FB95D] font-Bricolage rounded-full text-sm  text-white'>
            Enroll Now
         </button>
      </Link>

      <Link to="/login">
         <button className='px-3 py-2 bg-[#043a3a] rounded-full font-Bricolage text-sm  text-white'>
            Get Started
         </button>
       </Link>
   </div>
  

       {/* Users and Rating*/}


 
 
 <div className='flex  items-start justify-center mt-[30px] flex-col'> 
       <div className='text-[13px] font-Mulish text-white'>
         <div className='w-[90px] sm:w-[100px] h-[45px] bg-[#2FB95D] shadow-xl rounded-[12px]'>
              <div className='w-[80px] sm:w-[90px] h-[40px] flex flex-col justify-center items-center shadow-xl  bg-[#043a3a] rounded-[12px] '>
              <h1 className='font-bold text-[16px]'>50+</h1>
              <h1 className='font-semibold'>Students</h1>
              </div>
         </div>
       </div>
</div>


    <div className='flex items-start mt-[30px] justify-center flex-col'>


       <div className='text-[13px] font-Mulish text-white'>
         <div className='w-[90px] sm:w-[100px] h-[50px] bg-[#2FB95D] shadow-xl rounded-[12px]'>
              <div className='w-[80px] sm:w-[90px] h-[45px] flex flex-col justify-center items-center shadow-xl  bg-[#043a3a] rounded-[12px] '>
              <h1 className='font-bold flex text-[16px] items-center'>4.7 <span className='text-[#FFCE31]'><IoIosStar/></span></h1>
              <h1 className='font-semibold'>Rating</h1>
              </div>
         </div>
       </div>

   </div>

      </div>
    
</div>
 


                                  {/* What we offer */}
        <h1 className='text-2xl md:text-3xl font-bold text-[#043a3a] font-Bricolage text-center pt-8  md:pt-10'><span>What </span><span className='text-[#2FB95D] border-b-2 px-[4px] pb-[5px] border-[#2fb95d]'>We</span> <span className='text-[#2FB95D]'>Offer</span></h1>
      <h4 className='text-[#043A3A] text-center text-sm md:text-lg py-3 font-semibold font-Bricolage'>Quality Breeding, Feeding, and Care for Healthier Rabbits and Higher Profits.</h4>
      
    <div className='flex justify-center items-center'>   
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5'>
        {
         Offer.map((info, i)=>      
       <div className='w-[280px] sm:w-[300px] h-fit  bg-white shadow-emerald-50  shadow-lg rounded-xl' key={i}>
           <div className='flex justify-center items-center'>
            <img alt='alternative' src={info.Img} className='w-[280px] sm:w-[300px] rounded-xl object-cover h-[200px]'/>
           </div>

           <div>
               <h1 className='text-[18px] font-bold font-Bricolage text-[#2FB95D] text-center pt-2 '>{info.Heading}</h1>
               {/* not more than 22-25 words */}
               <p className='text-sm text-center text-[#043A3A] px-4 md:text-[15px] py-1 pb-2 '>{info.Paragraph}</p>
           </div>
       </div>    
        )}
  
    </div> 
  </div>


        {/* Acount details */}
     <div>
      </div>
        <div className='h-fit pb-4  w-full mt-3 text-white bg-[#043A3A] font-bold text-center font-Mulish text-[15px] sm:text-[16px]'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center pt-[10px]  font-Bricolage text-white'> Payment <span className='text-[#2FB95D]'>Process</span></h1>
           <h1> Kindly use the following authorized account details for secure payment processing.</h1>
           <h1>Training fee is #15,000 per Month.</h1>

           <div className='flex flex-col justify-center items-center pt-4 '>
               
               <h5 className='text-start pt-1 text-xs'>Account Name</h5>
               <div className='bg-gray-100 text-[#043A3A] font-semibold w-[250px] h-[35px] font-Bricolage flex items-center justify-center'>
                <h1>Bello Muhyideen Oladimeji</h1>
               </div>

               <h5 className='text-start pt-2 text-xs'>Bank Name</h5>
               <div className='bg-gray-100 text-[#043A3A] font-semibold w-[250px] h-[35px] font-Bricolage flex items-center justify-center'>
                <h1>First Bank of Nigeria</h1>
               </div>


               <h5 className='text-start pt-2 text-xs'>Account Number</h5>
               <div className='bg-gray-100 text-[#043A3A] font-semibold w-[250px] h-[35px] font-Bricolage flex items-center justify-center'>
                <h1>0430639329</h1>
               </div>

           </div>


        </div>      
      
      {/* Faqs */}
      <div>
          <h1 className='text-2xl sm:text-3xl font-bold text-center pt-[40px] font-Bricolage text-[#043A3A]'>Frequently Asked <span className='text-[#2FB95D]'>Questions</span></h1>
          <p className='text-sm px-2 font-Bricolage text-[#043A3A] font-bold text-center pb-7 pt-4'>Gain comprehensive knowledge on rabbit care, health, and management. Boost your confidence and productivity!</p>
      </div>
      
                    {/* Faqs  */}
       <div className='justify-center items-center flex pb-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-Bricolage text-[#043A3A]  gap-5'>
           
           {Faqs.map((info,i) => 
            <div className="bg-white rounded-xl px-2 py-2 " key={i}>

              <div className='flex gap-x-1 justify-center items-center'>
                <div>
                  <h3 className='font-semibold text-[#2FB95D] text-[18px]'><HiOutlineQuestionMarkCircle/></h3>
                </div>

                <div>
                    <h3 className='text-sm w-[280px] font-bold  px-2 '>{info.Question}</h3>
                </div>
              </div>

                <div className='w-[270px] h-fit font-Mulish  pt-5 pl-[28px] text-xs '>
                     <p>{info.Answer}</p>
                </div>
            </div> 
            )}
           
      </div>
      </div>



      {/* Footer */}

  
    </div>
  )
}

export default Homepage
