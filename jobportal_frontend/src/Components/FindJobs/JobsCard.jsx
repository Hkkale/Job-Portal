import { Button, Divider, Text } from '@mantine/core';
import React from 'react'
import { FaRegClock } from "react-icons/fa6";

import { FaRegBookmark ,FaBookmark} from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { timeAgo } from '../../Services/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';

const JobsCard = (job) => {


  const profile=useSelector((state)=>state.profile);
  
  
  const dispatch= useDispatch();
  const handleSaveJob=()=>{
    let savedJobs=profile.savedJobs?[...profile.savedJobs]:[];


    if(savedJobs?.includes(job.id)){
      savedJobs=savedJobs.filter((jobId)=>jobId!==job.id)
    }
    else{
      savedJobs=[...savedJobs,job.id]
    }

    let updatedProfile={...profile,savedJobs:savedJobs};
    dispatch(changeProfile(updatedProfile))
    console.log(updatedProfile);

  }
  const navigate = useNavigate()
  return (
    <div  className='bg-mine-shaft-900 p-4 w-72 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 '>

      <div className='flex justify-between '>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`/src/assets/Icons/${job.company}.png`} alt="" /></div>
          <div>
            <div className='font-semibold'>{job.jobTitle}</div>
            <div className='text-xs text-mine-shaft-300 '>{job.company} &#x2022; {job.applicants?job.applicants.length:0} Applicants</div>
          </div>
        </div>
        {profile.savedJobs?.includes(job.id) ?<FaBookmark onClick={()=>handleSaveJob()} className=' cursor-pointer text-bright-sun-400'/>:<FaRegBookmark onClick={()=>handleSaveJob()} className='text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400'/>}
      </div>





      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs'>

        <div>{job.experience}</div>
        <div>{job.jobType}</div>
        <div>{job.location}</div>



      </div>


      <Text className='!text-xs text-justify !text-mine-shaft-300 min-h-[3.6em] '
       lineClamp={3}>
     {job.about}
       </Text>


      <Divider color='mineShaft.7' size="xs" orientation="horizontal" />






      <div className='flex justify-between  '>
        <div className='font-semibold text-mine-shaft-200'>&#8377; {job.packageOffered} LPA</div>
        <div className='flex gap-1 text-xs items-center text-mine-shaft-400'> <FaRegClock className='h-4 w-4'/>{timeAgo(job.postTime)}</div>
      </div>


      <Button onClick={()=>navigate(`/jobs/${job.id}`)} className='cursor-pointer !h-8' fullWidth color='brightSun.4' variant='outline'>View Job</Button>



      
      
    </div>
  )
}

export default JobsCard
