import { Avatar, Rating } from '@mantine/core'
import React from 'react'

const Testimonials = () => {

  const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating": 5
    },
    {
        "name": "Abhishek Kullu",
        "testimonial": "Found my dream job within a week! The application process was smooth.",
        "rating": 5
    },
    {
        "name": "Swapnil Pandey",
        "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating": 4
    },
    {
        "name": "Pavan Barnana",
        "testimonial": "Highly efficient job portal with excellent resources. Helped me land a great position.",
        "rating": 4
    }
]
  return (
    <div className='mt-20 pb-5'>
      <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3 ">
        What  <span className="text-bright-sun-400">User </span> says about us
      </div>



      <div className='flex justify-evenly'>


      { testimonials.map((data,index)=><div key={index} className='flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10'>
        <div className='flex gap-2 items-center '>
          <Avatar className='!h-14 !w-14 ' src="./src/assets/avatar-9.png" />
        
          <div>
            <div className='text-lg text-mine-shaft-100 font-semibold'>{data.name}</div>
            <Rating value={data.rating} fractions={2} readOnly className='' />
          </div>
        </div>

        <div className='text-xs text-mine-shaft-300'>
          {data.testimonial}
        </div>

      </div>)}

      </div>





    </div>
  )
}

export default Testimonials
