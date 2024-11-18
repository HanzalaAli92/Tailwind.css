 import React from 'react'
 import { FaFacebookF , FaLinkedinIn  } from "react-icons/fa";
 import { BsTwitter , BsInstagram } from "react-icons/bs";

  const Footer = () => {
    return (
      <div className='container pt-20 '>
        <div className='grid md:grid-cols-3 gap-x-20 gap-y-16'>
           <div className='space-y-4 w-96'>
            <h2 className='text-xl font-bold'>About Us</h2>
            <p className='leading-[1.8]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus eius ratione, incidunt doloribus natus saepe 
            provident ex maiores dignissimos.
            </p>
           </div>

        <div className='space-y-4 mx-28'>
        <h2 className='text-xl font-bold'>The Resturant</h2>

        <ul >
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
        </ul>
        </div>

        
           <div className='w-96 flex flex-col items-center'>
            <div className='flex gap-8 text-accent text-2xl pt-0 '>
           <FaFacebookF />
           <BsInstagram />
           <BsTwitter />
           <FaLinkedinIn />
           </div>
           <div className='mt-5 font-bold'>
           © Hanzala | All rights reserved 2024.
           </div>
           </div>
           
        </div>
      </div>
    )
  }
  
  export default Footer