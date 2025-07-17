import React from 'react'
import { Carousel } from "@mantine/carousel";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";

const JobCategory = () => {
  const jobCategory = [
    {
        "name": "Digital Marketing",
        "desc": "Promote brands online with marketing strategies",
        "jobs": "1k"
    },
    {
        "name": "Web Developer",
        "desc": "Build and maintain websites for clients",
        "jobs": "2k"
    },
    {
        "name": "Arts & Design",
        "desc": "Create visual content for branding and media",
        "jobs": "500"
    },
    {
        "name": "UI-UX Designer",
        "desc": "Design user interfaces and enhance user experience",
        "jobs": "800"
    },
    {
        "name": "Content Writing",
        "desc": "Write and edit content for various platforms",
        "jobs": "1.5k"
    },
    {
        "name": "Data Entry",
        "desc": "Input data into systems accurately and efficiently",
        "jobs": "1k"
    },
    {
        "name": "Customer Support",
        "desc": "Assist customers with inquiries and issues",
        "jobs": "1.2k"
    },
    {
        "name": "Sales",
        "desc": "Sell products and services to customers",
        "jobs": "900"
    },
    {
        "name": "Finance",
        "desc": "Manage financial records and transactions",
        "jobs": "700"
    },
    {
        "name": "Human Resource",
        "desc": "Recruit, manage, and support company employees",
        "jobs": "600"
    }
]
  return (
    <div className="mt-20 w-full  overflow-hidden ">
      <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3">
        Browse <span className="text-bright-sun-400">Job </span>Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center mb-12  w-1/2">
        Explore diverse job oppurtunities tailored to your skills. Start your
        career journey today!
      </div>

      <div className='w-full '>
      <Carousel
        
        slideSize="20.6%"
        
        nextControlIcon={< FaArrowRightLong className='h-6 w-6 text-white p-0.5' size={16} />}
      previousControlIcon={< FaArrowLeftLong className='h-6 w-6 text-white p-0.5' size={16} />}
      
        emblaOptions={{
          loop: true,
          dragFree: true,
          align: "start",
          
        }}
        className='h-full flex flex-col justify-center [&_button]:!bg-bright-sun-400 ' 
      >
        {
          /* ...slides */

          jobCategory.map((category, index) => (
            <Carousel.Slide>
              <div className="flex flex-col items-center w-66 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0px_0_5px_2px_black] !shadow-bright-sun-400 transition duration-300 ease-in-out">
                <div className="p-2 bg-bright-sun-300 rounded-full">
                  <img
                    className="h-8 w-8"
                    src={`./src/assets/Category/${category.name}.png`}
                    alt={category.name}
                  />
                </div>
                <div className="text-mine-shaft-100 text-xl font-semibold">
                  {category.name}
                </div>
                <div className="text-mine-shaft-300 text-sm text-center ">{category.desc}
                </div>
                <div className="text-bright-sun-300 text-lg">
                  {category.jobs}+ new job posted
                </div>
              </div>
            </Carousel.Slide>
          ))
        }
      </Carousel>
      </div>
    </div>
  );
}

export default JobCategory
