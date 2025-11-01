import React, { useEffect, useState } from "react";
import JobsCard from "../FindJobs/JobsCard";
import { useParams } from "react-router";
import { getAllJobs } from "../../Services/JobService";

const RecommendedJob = () => {

  const [jobList, setJobList]=useState([{}])

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


  const id=useParams().id;
  return (
    <div>
      <div className="text-xl font-semibold mb-5 text-mine-shaft-100">
        Recommended Jobs
      </div>

      <div className="flex flex-wrap flex-col max-[940px]:flex-row  gap-5 ">
        {jobList.map(
          (job, index) => index < 5 && id!= job.id  && <JobsCard key={index} {...job} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJob;
