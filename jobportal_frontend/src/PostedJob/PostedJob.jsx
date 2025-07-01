import { Tabs } from "@mantine/core";
import React from "react";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
  const activeJobs=[
    {
      "jobTitle": "Frontend Developer",
      "location": "San Francisco, USA",
      "posted": "5 days ago"
    },
    {
      "jobTitle": "Backend Engineer",
      "location": "London, UK",
      "posted": "2 days ago"
    },
    {
      "jobTitle": "Full Stack Developer",
      "location": "Sydney, Australia",
      "posted": "7 days ago"
    },
    {
      "jobTitle": "UI/UX Designer",
      "location": "Toronto, Canada",
      "posted": "1 day ago"
    },
    {
      "jobTitle": "DevOps Engineer",
      "location": "Berlin, Germany",
      "posted": "4 days ago"
    },
    {
      "jobTitle": "Mobile App Developer",
      "location": "Austin, USA",
      "posted": "8 days ago"
    },
    {
      "jobTitle": "Data Analyst",
      "location": "Mumbai, India",
      "posted": "6 days ago"
    },
    {
      "jobTitle": "Cloud Architect",
      "location": "Dublin, Ireland",
      "posted": "3 days ago"
    },
    {
      "jobTitle": "Software Engineer",
      "location": "Tokyo, Japan",
      "posted": "9 days ago"
    },
    {
      "jobTitle": "Cybersecurity Specialist",
      "location": "Paris, France",
      "posted": "10 days ago"
    }
  ]
  const drafts=[
    {
      "jobTitle": "Junior Web Developer",
      "location": "New York, USA",
      "posted": "3 days ago"
    },
    {
      "jobTitle": "ML Engineer",
      "location": "Toronto, Canada",
      "posted": "6 days ago"
    },
    {
      "jobTitle": "DevOps Specialist",
      "location": "Amsterdam, Netherlands",
      "posted": "2 days ago"
    }
  ]
  return (
    <div className="w-1/6 mt-6">
      <div className="text-2xl font-semibold mb-5 ">Jobs</div>

      <div>
        <Tabs autoContrast variant="pills" defaultValue="active">
          <Tabs.List className="[&_button[aria-selected='false']]:!bg-mine-shaft-900 font-medium  ">
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-5 mt-5">
              {

                activeJobs.map((item,index)=><PostedJobCard key={index} {...item}/>)


              }
            </div>
          </Tabs.Panel>





          
          <Tabs.Panel value="draft">


            <div className="flex flex-col gap-5 mt-5">
              {

                drafts.map((item,index)=><PostedJobCard key={index} {...item}/>)


              }
            </div>





          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;
