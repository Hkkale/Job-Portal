import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'


import PostedJob from '../Components/PostedJob/PostedJob'
import PostedJobDesc from '../Components/PostedJob/PostedJobDesc'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {getJobPostedBy} from "../Services/JobService"

const PostedJobPage = () => {
  const id=useParams().id;
  const user=useSelector((state)=>state.user);
  const [jobList , setJobList]=useState([])
  const [job , setJob]=useState({})


  useEffect(()=>{
    window.scrollTo(0,0);
    getJobPostedBy(user.id)
    .then((res)=>{
      setJobList(res)
      setJob(res.find((item)=>item.id==id))
    })
    .catch((err)=>{
      console.log(err)
    })

  },[id])

  
  return (
    <div className=' min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden'>
    
          
    
          


          
          
    
    
         <div className='flex px-4 gap-15 mb-10'>

          <PostedJob job={job} jobList={jobList}/>
          <PostedJobDesc {...job}/>
            
         </div>
        
        
    
        </div>
  )
}

export default PostedJobPage
