import { Button, Divider } from '@mantine/core'
import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import ExpCard from './ExpCard'

const Profile = () => {
  return (
    <div className='w-2/3 ' >

      <div className='relative '>
        <img className='rounded-t-2xl h-45 w-full' src="./src/assets/banner.jpg" alt="banner" />

        <img className='rounded-full w-48 h-48 -bottom-1/4 absolute left-3  border-mine-shaft-950 border-8' src="./src/assets/avatar-9.png" alt="" />



      </div>
      
        <div className='px-3 mt-16'>

          <div className='text-3xl font-semibold flex justify-between'>Jarrad Wood
            <Button color='brightSun.4' variant='light'>Message</Button>
          </div>
          <div className='text-xl flex gap-1 items-center '><FaBriefcase className='h-4 w-4'/> Software Engineer &bull; Google </div>

          <div className='flex gap-1 text-lg items-center text-mine-shaft-300'> <GrLocation className='h-4 w-4'/>New York, Unite States</div>

        </div>

        <Divider my="xl"  mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>About</div>
          <div className='text-sm text-mine-shaft-300 text-justify'>As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.</div>
        </div>
        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Skills</div>
          <div className='flex flex-wrap gap-2'>
            <div className='bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1'>React</div>
            <div className='bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1'>React</div>
            <div className='bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1'>React</div>
          </div>
        </div>


        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Experience</div>

          <ExpCard/>

        </div>


        
        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Certifications</div>

          

        </div>
    </div>

  )
}

export default Profile
