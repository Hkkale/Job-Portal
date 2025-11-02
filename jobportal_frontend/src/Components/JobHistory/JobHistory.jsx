import { Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import {getAllJobs} from "../../Services/JobService"
import { useSelector } from "react-redux";

const JobHistory = () => {
  const profile= useSelector((state)=>state.profile)
   const user= useSelector((state)=>state.user)
  const [activeTab, setActiveTab] = useState("APPLIED");
  const [jobList, setJobList] = useState([]);
  const [showList, setShowList] = useState([]);

  useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobList(res)
      setShowList(res.filter((job)=>job.applicants?.filter((applicant)=>applicant.applicantId==profile.id && applicant.applicationStatus=="APPLIED").length>0))

    })
    .catch((err)=>{
      console.log(err)

    })

  },[])


  const handleTabChange = (value) => {
    setActiveTab(value);

    if(value=="SAVED"){
      setShowList(jobList.filter((job)=>profile.savedJobs?.includes(job.id)))


    }
    else{
      setShowList(jobList.filter((job)=>job.applicants?.filter((applicant)=>applicant.applicantId==user.id && applicant.applicationStatus==value).length>0))


    }




  }



  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5 max-[630px]:text-xl">Job History</div>

      <div>
        <Tabs value={activeTab} onChange={handleTabChange} variant="outline" >
          <Tabs.List className="[&_button]:!text-lg [&_button]:!font-semibold mb-5 max-[630px]:[&_button]:!font-medium [&_button[data-active='true']]:!text-bright-sun-400 max-[630px]:[&_button]:!text-base max-[355px]:[&_button]:!text-sm max-[630px]:[&_button]:!px-1.5 max-[630px]:[&_button]:!py-2">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab}>
            <div className="flex gap-5 flex-wrap justify-start w-full mt-10  ">
              {showList.map((job, index) => (
                <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}} />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
