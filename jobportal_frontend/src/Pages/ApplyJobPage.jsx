import { Button } from '@mantine/core'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router';
import App from '../App';
import ApplyJobComp from '../ApplyJob/ApplyJobComp';

const ApplyJobPage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins] w-screen  border-white box-border overflow-x-hidden'>
    
          
    
          <Button className='m-4' leftSection={<FaArrowLeftLong size={20}/>} color='brightSun.4' onClick={()=>navigate("/jobs")} variant='light' > Back </Button>


          <ApplyJobComp/>
          
    
    
          
        
        
    
        </div>
  )
}

export default ApplyJobPage
