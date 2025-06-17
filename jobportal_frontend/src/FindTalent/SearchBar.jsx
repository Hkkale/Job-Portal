import React, { useState } from 'react'

import { IoSearch } from 'react-icons/io5';
import { GrLocation } from "react-icons/gr";

import { SiGooglesearchconsole } from "react-icons/si";
import { Divider, Input, RangeSlider } from '@mantine/core';
import MultiInput from '../FindJobs/MultiInput';
import { FaRegUserCircle } from "react-icons/fa";


const SearchBar = () => {

  const [value, setValue]= useState([1,80]);

  const searchFields=[
    { title: "Job Title", icon: IoSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: GrLocation, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Skills", icon: SiGooglesearchconsole, options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
]
  return (
    <div className='flex px-5 py-8 items-center '>

      <div className='flex items-center '>

        <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2'>
          <FaRegUserCircle size={20}/>
        </div>
        <Input className='[&_input]:!placeholder-mine-shaft-200 ' variant='unstyled' placeholder='Talent Name'/>


      </div>
      <Divider mr="xs" size="xs" orientation="vertical" />

      {
        searchFields.map((item,index)=><>
        <div key={index} className='w-1/5'>
        
        <MultiInput {...item} />
        </div>
        <Divider mr="xs" size="xs" orientation="vertical" />
        
        
      
      </>
      )
      }
      <div className='w-1/5 [&_.mantine-Slider-label]:!translate-y-10.5'>
        <div className='flex justify-between text-sm'>
          <div>Salary</div>
          <div>&#8377; {value[0]} LPA - &#8377; {value[1]} LPA</div>
        </div>
        <RangeSlider size="xs" color='brightSun.4' labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }} value={value} onChange={setValue}  />
      </div>
      
      
      
      
    </div>
  )
}

export default SearchBar
