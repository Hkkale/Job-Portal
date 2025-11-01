import { Button } from '@mantine/core'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router';
import ApplyJobComp from '../Components/ApplyJob/ApplyJobComp';
import { useEffect, useState } from 'react';
import { getJob } from '../Services/JobService';

const ApplyJobPage = () => {
  const id=useParams().id;
  
  const [job , setJob]=useState({})

  useEffect(()=>{
    window.scrollTo(0,0);

    getJob(id).then((res)=>{
      setJob(res)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[id])

  const navigate = useNavigate();
  return (
    <div className='min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border  '>
    
          
    
          <Button className='m-4' leftSection={<FaArrowLeftLong size={20}/>} color='brightSun.4' onClick={()=>navigate(-1)} variant='light' > Back </Button>


          <div className='flex justify-center w-full '>
            <ApplyJobComp {...job}/>
          </div>
          
    
    
          
        
        
    
        </div>
  )
}

export default ApplyJobPage
