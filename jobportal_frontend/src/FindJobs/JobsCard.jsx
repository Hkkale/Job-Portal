import { Divider, Text } from '@mantine/core';
import React from 'react'
import { FaRegClock } from "react-icons/fa6";

import { FaRegBookmark } from "react-icons/fa6";

const JobsCard = (job) => {
  return (
    <div className='bg-mine-shaft-900 p-4 w-72 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 '>

      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`./src/assets/Icons/${job.company}.png`} alt="" /></div>
          <div>
            <div className='font-semibold'>{job.jobTitle}</div>
            <div className='text-xs text-mine-shaft-300 '>{job.company} &#x2022; {job.applicants} Applicants</div>
          </div>
        </div>
        <FaRegBookmark className='text-mine-shaft-300 cursor-pointer'/>
      </div>





      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs'>

        <div>{job.experience}</div>
        <div>{job.jobType}</div>
        <div>{job.location}</div>



      </div>


      <Text className='!text-xs text-justify !text-mine-shaft-300 ' lineClamp={3}>
     {job.description}
       </Text>


      <Divider color='mineShaft.7' size="xs" orientation="horizontal" />






      <div className='flex justify-between  '>
        <div className='font-semibold text-mine-shaft-200'>&#8377; {job.package}</div>
        <div className='flex gap-1 text-xs items-center text-mine-shaft-400'> <FaRegClock className='h-4 w-4'/>{job.postedDaysAgo} days ago</div>
      </div>



      
      
    </div>
  )
}

export default JobsCard
