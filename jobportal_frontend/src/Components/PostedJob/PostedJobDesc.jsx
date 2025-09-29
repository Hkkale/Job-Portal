import { Badge, Tabs } from "@mantine/core";
import React from "react";

import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props) => {
  
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        {props.jobTitle}
        <Badge variant="light" ml="sm" size="sm" color="brightSun.4">
          {props.jobStatus}
        </Badge>
      </div>

      <div className="font-medium text-mine-shaft-300 mb-5">
        {props.location}
      </div>

      <Tabs variant="outline" defaultValue="overview">
        <Tabs.List className="[&_button]:!text-lg [&_button]:!font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400">
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
          <Tabs.Tab value="invited">Invited</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="[&>div]:w-full" value="overview">
          {" "}
          <JobDesc {...props} edit />{" "}
        </Tabs.Panel>
        <Tabs.Panel value="applicants">
          <div className="flex mt-10 flex-wrap gap-8 justify-around">
            {props.applicants?.filter((x)=>x.applicationStatus=="APPLIED").map((talent, index) => (
              <TalentCard key={index} {...talent} posted />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="invited">
          <div className="flex mt-10 flex-wrap gap-8 justify-around">
            {props.applicants?.filter((x)=>x.applicationStatus=="INTERVIEWING").map((talent, index)=> (
              <TalentCard key={index} {...talent} invited />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default PostedJobDesc;
