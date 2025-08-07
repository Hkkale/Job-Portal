import React from 'react'
import SelectInput from './SelectInput'
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core'

import TextEditor from './TextEditor'
import { isNotEmpty, useForm } from '@mantine/form'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { postJob } from '../../Services/JobService'
import { errorNotifiaction, successNotification } from '../../Services/NotificationService'
import {useNavigate}  from 'react-router'


const PostJob = () => {

  const select=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify']},
    {label:"Experience",placeholder:"Enter Experience Level", options:['Entry Level', 'Intermediate', 'Expert']},
    {label:"Job Type",placeholder:"Enter Job Type", options:['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto']},
    {label:"Salary",placeholder:"Enter Salary", options:['10 LPA', '15 LPA', '20 LPA', '25 LPA', '30 LPA', '35 LPA', '40 LPA', '45 LPA']}
]

const navigate=useNavigate();

const content =
  '<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>';

  const form=useForm({
    mode:"controlled",
    validateInputOnChange:true,
    initialValues:{
      jobTitle: '',
      company: '',
      experience: '',
      jobType: '',
      location: '',
      packageOffered: '',
      skillsRequired: [],
      about:'',
      description:content
    },
    validate:{
      jobTitle: isNotEmpty('Title is reuired'),
      company: isNotEmpty('company is reuired'),
      experience: isNotEmpty('Experience is reuired'),
      jobType:  isNotEmpty('Job type is reuired'),
      location:  isNotEmpty('location is reuired'),
      packageOffered:  isNotEmpty('Package is reuired'),
      skillsRequired:  isNotEmpty('skills is reuired'),
      about: isNotEmpty('About is reuired'),
      description: isNotEmpty('Description is reuired')
    }
  });

  const handlePost=()=>{
    form.validate();

    if(!form.isValid()) return;


    postJob(form.getValues())
      .then((res)=>{
        console.log(res)
        successNotification("Success","Job posted successfully")
        navigate("/posted-job")

      })
      .catch((err)=>{
        console.log(err)
        errorNotifiaction("Error",err.response.data.message)
      })



  }


  return (
    <div className='w-4/5 mx-auto mt-10'>

      <div className='text-2xl font-semibold mb-5 '>Post a Job</div>

      <div className=' flex flex-col gap-5 '>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput form={form} name="jobTitle"  {...select[0]}/>
          <SelectInput form={form} name="company" {...select[1]}/>
      
        </div>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput form={form} name="experience" {...select[2]}/>
          <SelectInput form={form} name="jobType" {...select[3]}/>
      
        </div>

        <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput form={form} name="location" {...select[4]}/>
          <NumberInput {...form.getInputProps('packageOffered')} label="Salary" placeholder='Enter Salary'  withAsterisk hideControls min={1} max={200} clampBehavior='strict'/>
      
        </div>


        <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder='Enter Skills' clearable acceptValueOnBlur splitChars={[' ',',', '|']} />

        <Textarea {...form.getInputProps('about')} label="About Job" withAsterisk minRows={2} placeholder='Enter about Job' autosize/>


        <div className='[&_button[data-active="true"]]:!text-bright-sun-400  [&_button[data-active="true"]]:!bg-bright-sun-400/20'>

          <div className='text-sm font-medium'> Job Description <span className='text-red-500 '>*</span></div>
          <TextEditor form={form}/>

        </div>


        <div className=' flex gap-4 mb-6'>
          <Button className=''  color='brightSun.4' onClick={()=>handlePost()} variant='light' > Publish Job </Button>
          <Button className=''  color='brightSun.4' onClick={()=>navigate("/find-talent")} variant='outline' > Save as Draft </Button>
        </div>







      </div>

     
      
    </div>
  )
}

export default PostJob
