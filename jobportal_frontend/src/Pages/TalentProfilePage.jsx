import { Button, Divider } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router'
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from '../TalentProfile/Profile';

const TalentProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins] w-screen  border-white box-border overflow-x-hidden'>

      <Divider mx="md" size="xs" orientation="horizontal" />
      <Button className='m-4' leftSection={<FaArrowLeftLong size={20}/>} color='brightSun.4' onClick={()=>navigate("/find-talent")} variant='light' > Back </Button>


      <div className='flex gap-5 m-4'>
        <Profile/>

      </div>
      
    
    

    </div>
  )
}

export default TalentProfilePage





