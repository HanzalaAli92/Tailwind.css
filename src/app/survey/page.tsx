import Image from 'next/image'
import React from 'react'

const Survey = () => {
  return (
    <div className='container pt-40'>
     <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
        <div>
            <Image 
            className='w-[100%] h-auto lg:w-auto lg:h-[90vh]'
            src={"/images/survey.png"}
            alt='survey image'
            width={1000}
            height={600}/>
        </div>
        <div data-aos="zoom-out-right" className='self-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>Survey</h2>

            <h2 className='text-4xl md:text-6xl font-bold'>About Our
                <span className='text-accent'>Food</span>
            </h2>

            <p className='text-gray-700 pt-16'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus eius ratione, incidunt doloribus natus saepe 
            provident ex maiores dignissimos distinctio cupiditate 
            assumenda ab accusantium commodi. Reprehenderit excepturi 
            quibusdam assumenda provident.
            </p>

            <p className='text-gray-700 pt-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus eius ratione, incidunt doloribus natus saepe 
            provident ex maiores dignissimos distinctio cupiditate 
            assumenda ab accusantium commodi. Reprehenderit excepturi 
            quibusdam assumenda provident.
            </p>
        </div>
     </div>
    </div>
  )
}

export default Survey
