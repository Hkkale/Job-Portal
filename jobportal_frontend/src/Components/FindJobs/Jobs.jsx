import React, { useState ,useEffect} from 'react'
import Sort from './Sort'
import JobsCard from './JobsCard'
import { getAllJobs } from '../../Services/JobService'

const Jobs = () => {
  
  
  const[jobList,setJobList] = useState([{}])

  useEffect(()=>{

    getAllJobs()
    .then((res)=>{
      
      setJobList(res)
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])

  console.log("jobLissssttttt--------",jobList)
  
  return (

    <div className='p-5'>

      <div className='flex justify-between'>

        <div className='text-2xl font-semibold '>Recommended Jobs</div>
        <div>
          <Sort/>
        </div>

       

      </div>
       
       <div className='flex gap-3 flex-wrap w-full mt-10  '>
        {jobList.map((job,index)=> <JobsCard key={index} {...job}/>)}

       </div>
      
    </div>
  )
}

export default Jobs
