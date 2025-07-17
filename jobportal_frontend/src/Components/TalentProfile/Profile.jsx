import { Button, Divider } from '@mantine/core'
import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import ExpCard from './ExpCard'
import CertifiCard from './CertifiCard'

const Profile = (profile) => {
  return (
    <div className='w-2/3 ' >

      <div className='relative '>
        <img className='rounded-t-2xl h-45 w-full' src="./src/assets/banner.jpg" alt="banner" />

        <img className='rounded-full w-48 h-48 -bottom-1/4 absolute left-3  border-mine-shaft-950 border-8' src="./src/assets/avatar-9.png" alt="" />



      </div>
      
        <div className='px-3 mt-16'>

          <div className='text-3xl font-semibold flex justify-between'>{profile.name}
            <Button color='brightSun.4' variant='light'>Message</Button>
          </div>
          <div className='text-xl flex gap-1 items-center '><FaBriefcase className='h-4 w-4'/> {profile.role} &bull; {profile.company} </div>

          <div className='flex gap-1 text-lg items-center text-mine-shaft-300'> <GrLocation className='h-4 w-4'/>{profile.location}</div>

        </div>

        <Divider my="xl"  mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>About</div>
          <div className='text-sm text-mine-shaft-300 text-justify'>{profile.about}</div>
        </div>
        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Skills</div>
          <div className='flex flex-wrap gap-2'>
            {profile.skills.map((skill,index)=><div key={index} className='bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1'>{skill}</div>
          )}
          </div>
        </div>


        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Experience</div>

          <div className='flex flex-col gap-8'>
            {profile.experience.map((exp,index)=><ExpCard key={index} {...exp} />)}
          </div>

          

        </div>


        
        <Divider my="xl" mx="xs" orientation="horizontal" />

        <div className='px-3'>
          <div className='text-2xl font-semibold mb-5 '>Certifications</div>

         <div className='flex flex-col gap-8'>
            {profile.certifications.map((certi,index)=><CertifiCard key={index} {...certi} />)}
          </div>

        </div>
    </div>

  )
}

export default Profile
