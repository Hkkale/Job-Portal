import React from 'react'
import SelectInput from './SelectInput'
import { Button, TagsInput } from '@mantine/core'

import TextEditor from './TextEditor'
import { FaArrowLeftLong } from 'react-icons/fa6'



const PostJob = () => {

  const select=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify']},
    {label:"Experience",placeholder:"Enter Experience Level", options:['Entry Level', 'Intermediate', 'Expert']},
    {label:"Job Type",placeholder:"Enter Job Type", options:['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto']},
    {label:"Salary",placeholder:"Enter Salary", options:['10 LPA', '15 LPA', '20 LPA', '25 LPA', '30 LPA', '35 LPA', '40 LPA', '45 LPA']}
]


  return (
    <div className='w-4/5 mx-auto mt-10'>

      <div className='text-2xl font-semibold mb-5 '>Post a Job</div>

      <div className=' flex flex-col gap-5 '>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput {...select[0]}/>
          <SelectInput {...select[1]}/>
      
        </div>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput {...select[2]}/>
          <SelectInput {...select[3]}/>
      
        </div>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput {...select[4]}/>
          <SelectInput {...select[5]}/>
      
        </div>


        <TagsInput withAsterisk label="Skills" placeholder='Enter Skills' clearable acceptValueOnBlur splitChars={[' ',',', '|']} />


        <div className='[&_button[data-active="true"]]:!text-bright-sun-400  [&_button[data-active="true"]]:!bg-bright-sun-400/20'>

          <div className='text-sm font-medium'> Job Description</div>
          <TextEditor/>

        </div>


        <div className=' flex gap-4 mb-6'>
          <Button className=''  color='brightSun.4' onClick={()=>navigate("/find-talent")} variant='light' > Publish Job </Button>
          <Button className=''  color='brightSun.4' onClick={()=>navigate("/find-talent")} variant='outline' > Save as Draft </Button>
        </div>







      </div>

     
      
    </div>
  )
}

export default PostJob
