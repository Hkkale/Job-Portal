import { Button, Drawer } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'


import PostedJob from '../Components/PostedJob/PostedJob'
import PostedJobDesc from '../Components/PostedJob/PostedJobDesc'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {getJobPostedBy} from "../Services/JobService"
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const PostedJobPage = () => {
  const id=useParams().id;
  const user=useSelector((state)=>state.user);
  const [opened,{open,close}]=useDisclosure(false)
  const [jobList , setJobList]=useState([])
  const [job , setJob]=useState({})
  const navigate=useNavigate();
  const matches =useMediaQuery('(max-width: 837px)');


 


  

  useEffect(() => {
  window.scrollTo(0, 0);

  if (!user || !user.id) {
    console.log("User not loaded yet");
    return;
  }

  getJobPostedBy(user.id)
    .then((res) => {
      setJobList(res || []);
      if (res && res.length > 0 && Number(id) === 0) {
        navigate(`/posted-jobs/${res[0].id}`);
      }
      setJob(res.find((item) => item.id == id));
    })
    .catch((err) => {
      console.log("Error fetching jobs:", err);
    });
}, [id, user]);


  
  return (
    <div className='min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden'>


      <Drawer opened={opened} onClose={close} title="All Jobs"  size={250} overlayProps={{backgroundOpacity:0.5,blur:4}}>
      <PostedJob close={close} job={job} jobList={jobList}/>

      </Drawer>

      {matches && <Button onClick={open} my="xs" mx="xs" size='sm' autoContrast>All Jobs</Button>}
    
          
    
          


          
          
    
    
         <div className='flex px-4 gap-15 mb-10'>


          {!matches && <PostedJob job={job} jobList={jobList}/>}

          
          <PostedJobDesc {...job}/>
            
         </div>
        
        
    
        </div>
  )
}

export default PostedJobPage
