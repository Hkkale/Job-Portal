import { Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import PostedJobCard from "./PostedJobCard";

const PostedJob = (props) => {
  const [activeTab, setActiveTab] = useState("ACTIVE");
 


  useEffect(()=>{
    setActiveTab(props.job?.jobStatus||"ACTIVE")
    console.log("job prop in posted job",props.job)
    console.log(props.job?.jobStatus)

  },[props.job])

  return (
    <div className="w-1/6 mt-6">
      <div className="text-2xl font-semibold mb-5 ">Jobs</div>

      <div>
        <Tabs
          autoContrast
          variant="pills"
          value={activeTab}
          
          onChange={setActiveTab}
        >
          <Tabs.List className="[&_button[aria-selected='false']]:!bg-mine-shaft-900 font-medium  ">
            <Tabs.Tab onClick={() => setActiveTab("ACTIVE")} value="ACTIVE">
              Active [{ props.jobList?.filter((job)=>job?.jobStatus==='ACTIVE').length}]
            </Tabs.Tab>
            <Tabs.Tab onClick={() => setActiveTab("DRAFT")} value="DRAFT">
              Drafts [{ props.jobList?.filter((job)=>job?.jobStatus==='DRAFT').length}]
            </Tabs.Tab>
            <Tabs.Tab onClick={() => setActiveTab("CLOSED")} value="CLOSED">
              Closed [{ props.jobList?.filter((job)=>job?.jobStatus==='CLOSED').length}]
            </Tabs.Tab>
          </Tabs.List>

          
        </Tabs>
        <div className="flex flex-col gap-5 mt-5">
          {

            props.jobList?.filter((job)=>job?.jobStatus===activeTab).map((item,index)=><PostedJobCard key={index}{...item}/>)





          }
        </div>


      </div>
    </div>
  );
};

export default PostedJob;
