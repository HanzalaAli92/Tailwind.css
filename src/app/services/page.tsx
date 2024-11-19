
import React from 'react'
import Dash from '@/components/Dash'
import ServicesCard from '@/components/ServicesCard'

const servicesData = [
    {
        img: "/images/services__1.png",
        title: "Professional Kitchen",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        img: "/images/services__2.png",
        title: "Delivery",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        img: "/images/services__3.png",
        title: "Wine List",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        img: "/images/services__4.png",
        title: "Free Wifi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
]

const Services = () => {
  return (
    <div className='container pt-40'>
      <div data-aos="zoom-out-down" className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-4xl md:text-6xl font-bold'>
          Choose Best <span className='text-accent'>Services</span>
        </h2>
        <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <br />
        quidem esse eum animi?
        </p>
        <div className='w-fit mx-auto '>
          <Dash />
        </div>
      </div>
      <div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8 '>
         {servicesData.map((item, index) => (
            <ServicesCard 
            
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            />
         ))}
      </div>
    </div>
  )
}

export default Services
