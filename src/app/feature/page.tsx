import React from 'react'
import Dash from '@/components/Dash'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='container pt-40'>
       
      <div className='text-center'>
      <h2  className='text-6xl font-bold'>Our</h2>
      <h2  className='text-6xl font-bold pt-2'>
        Feature <span className='text-accent'>Food</span>
      </h2>

      <p className='max-w-[550px] pt-10 text-gray-700 m-auto'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Exercitationem, consectetur iste. Veritatis vel placeat 
       beatae id quia assumenda, a dolore dolores doloribus.
      </p>
      <div className='flex justify-center'>
      <Dash />
      </div>
      </div>
      <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
        <div className='w-fit mx-auto self-end'>
          <Image 
          src={"/images/grid__1.png"}
          alt='grid_image'
          width={300}
          height={600}
          className='w-[100%] max-w-[400px] sm:max-w-ful h-auto shadow-2xl'/>

          <div className='space-y-4'>
          <Dash />
          <h2 className='font-medium text-xl'>Shrimp Salad</h2>
          <p className='text-gray-700 text-[14px] xl:text-[16px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Animi vero nobis in molestiae sapiente! Autem.
          </p>
          </div>
        </div>

        <div className='w-fit mx-auto '>
          <Image 
          src={"/images/grid__2.png"}
          alt='grid_image'
          width={500}
          height={900}
          className='w-[100%] max-w-[400px] sm:max-w-ful h-auto shadow-2xl'/>

          <div className='space-y-4'>
          <Dash />
          <h2 className='font-medium text-xl'>Baked apples</h2>
          <p className='text-gray-700 text-[14px] xl:text-[16px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Animi vero nobis in molestiae sapiente! Autem.
          </p>
          </div>
        </div>

        <div className='w-fit mx-auto self-end '>
          <Image 
          src={"/images/grid__3.png"}
          alt='grid_image'
          width={300}
          height={600}
          className='w-[100%] max-w-[400px] sm:max-w-ful h-auto shadow-2xl'/>

          <div className='space-y-4'>
          <Dash />
          <h2 className='font-medium text-xl'>Cherries chicken</h2>
          <p className='text-gray-700 text-[14px] xl:text-[16px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Animi vero nobis in molestiae sapiente! Autem.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
