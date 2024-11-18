import Image from 'next/image'
import React from 'react'
    
    const Hero = () => {
      return (
        <div className='relative min-h-screen -mt-20 -z-10'>
          <Image 
          src={"/images/hero2.png"} 
          alt='hero bg' 
          width={1000} 
          height={600}
          className='lg:w-[580px] xl:w-[620px] h-auto 
          absolute right-0 top-0 -z-10 pt-24 sm:pt-0'/>
    
          <div className='container h-[calc(140vh-120px)] sm:h-[calc(100vh-120px)] grid items-center '>
            <div  className='space-y-4 bg-none sm:bg-[#ffffff98]  w-fit p-20 pt-[80vh] sm:pt-52'>
                <p  className='uppercase font-medium'>Wide options of choice</p>
                <h2 data-aos="zoom-in-up" className='text-4xl sm:text-6xl font-bold'>
                    Delicious  <span  className='text-accent'>Food</span>
                    </h2>
                    <p className='text-gray-700 text-[14px] sm:text-[16px]'>
                        Delicious food color, aroma and taste. <br />
                        What are you waiting for?
                    </p>
    
                    <button className='bg-accent text-white px-6 py-2
                     rounded-3xl text-[14px] sm:text-[16px]'>View More</button>
                   
            </div>
          </div>
        </div>
      )
    }
    
    export default Hero
    


