import { Badge, Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";

import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useMediaQuery } from "@mantine/hooks";

const PostedJobDesc = (props) => {
  const matches=useMediaQuery('(max-width: 475px)');
  const [tab,setTab]=useState("overview")

  const [arr , setArr]=useState([])

  const handleTabChange=(value)=>{

    setTab(value)

    if(value==="applicants"){
      setArr(props.applicants?.filter((x)=>x.applicationStatus=="APPLIED"))
    }
    else if(value==="invited"){
      setArr(props.applicants?.filter((x)=>x.applicationStatus=="INTERVIEWING"))
    }
    else if(value==="offered"){
      setArr(props.applicants?.filter((x)=>x.applicationStatus=="OFFERED"))
    }
    else if(value==="rejected"){
      setArr(props.applicants?.filter((x)=>x.applicationStatus=="REJECTED"))
    }

  }


  useEffect(()=>{
    handleTabChange("overview")
  },[props])
  
  return (
    <div className="mt-5 w-3/4 max-[837px]:w-full max-[837px]:px-0 px-5">
      {props.jobTitle ? <>
      <div className="text-2xl font-semibold flex items-center max-xs:text-xl">
        {props.jobTitle}
        <Badge variant="light" ml="sm" size={matches?"xs":"sm"} color="brightSun.4">
          {props.jobStatus}
        </Badge>
      </div>

      <div className="font-medium max-xs:text-sm text-mine-shaft-300 mb-5">
        {props.location}
      </div>

      <Tabs variant="outline" value={tab} onChange={handleTabChange}>
        <Tabs.List className="[&_button]:!text-lg [&_button]:!font-semibold mb-5 max-[630px]:[&_button]:!font-medium [&_button[data-active='true']]:!text-bright-sun-400 max-[630px]:[&_button]:!text-base max-[355px]:[&_button]:!text-sm max-[630px]:[&_button]:!px-1.5 max-[630px]:[&_button]:!py-2">
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
          <Tabs.Tab value="invited">Invited</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="[&>div]:w-full" value="overview">
          {" "}
         <JobDesc {...props} edit closed={props.jobStatus=="CLOSED"} />{" "}
        </Tabs.Panel>
        <Tabs.Panel value="applicants">
          <div className="flex mt-10 flex-wrap gap-8 justify-around ">
            {arr?.length?arr.map((talent,index)=><TalentCard key={index} {...talent} posted/>):<div className="text-2xl font-semibold flex items-center justify-center">No Applicants</div>}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="invited">
          <div className="flex mt-10 flex-wrap gap-8 justify-around">
            {arr?.length?arr.map((talent,index)=> (
              <TalentCard key={index} {...talent} invited />
            )):<div className="text-2xl font-semibold flex items-center justify-center">No Invited Candidates</div>}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="offered">
          <div className="flex mt-10 flex-wrap gap-8 justify-around">
            {arr?.length?arr.map((talent,index)=> (
              <TalentCard key={index} {...talent} offered />
            )):<div className="text-2xl font-semibold flex items-center justify-center">No Offered Candidates</div>}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="rejected">
          <div className="flex mt-10 flex-wrap gap-8 justify-around">
            {arr?.length?arr.map((talent,index)=> (
              <TalentCard key={index} {...talent} offered />
            )):<div className="text-2xl font-semibold flex items-center justify-center">No Rejected Candidates</div>}
          </div>
        </Tabs.Panel>
      </Tabs>
      </>: <div className="text-2xl min-h-[70vh] font-semibold flex flex-col items-center justify-center text-mine-shaft-200 max-[500px]:text-xl text-center">
       <h1>NO JOB FOUND!</h1> 
       <h1>Select a job to see details</h1>
      </div>}
    </div>
  );
};

export default PostedJobDesc;
