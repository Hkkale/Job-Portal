import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { IoSearch } from 'react-icons/io5';
import { GrLocation } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
import { SiGooglesearchconsole } from "react-icons/si";
import { Divider, RangeSlider } from '@mantine/core';


const SearchBar = () => {

  const [value, setValue]= useState([1,80]);

  const dropdownData = [
      { title: "Job Title", icon: IoSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
      { title: "Location", icon: GrLocation, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
      { title: "Experience", icon: HiOutlineBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
      { title: "Job Type", icon: SiGooglesearchconsole, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
  ];
  return (
    <div className='flex px-5 py-8 '>

      {
        dropdownData.map((item,index)=><>
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
