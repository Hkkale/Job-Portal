import { Button, Divider } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router'
import { FaArrowLeftLong } from "react-icons/fa6";
import JobDesc from '../JobDesc/JobDesc';


const JobDescPage = () => {

 
  
  const navigate = useNavigate();
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins] w-screen  border-white box-border overflow-x-hidden'>

      
      <Button className='m-4' leftSection={<FaArrowLeftLong size={20}/>} color='brightSun.4' onClick={()=>navigate("/find-jobs")} variant='light' > Back </Button>


      <div className='flex gap-15 m-4 '>

        <JobDesc/>
        

      </div>
      
    
    

    </div>
  )
}

export default JobDescPage





