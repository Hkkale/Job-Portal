import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmp from "./CompanyEmp";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative ">
        <img
          className="rounded-t-2xl h-45 w-full"
          src="./src/assets/banner.jpg"
          alt="banner"
        />

        <img
          className="rounded-3xl w-36 h-36 -bottom-1/4 absolute left-5 p-2 bg-mine-shaft-950 border-mine-shaft-950 border-8"
          src="./src/assets/Icons/Google.png"
          alt=""
        />
      </div>

      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="./src/assets/avatar-7.png" />
            <Avatar src="./src/assets/avatar-8.png" />
            <Avatar src="./src/assets/avatar-9.png" />
            <Avatar>10K+</Avatar>
          </Avatar.Group>
        </div>

        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          {" "}
          <GrLocation className="h-4 w-4" />
          New York, United States
        </div>
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div>
        <Tabs variant="outline" defaultValue="about">
          <Tabs.List className="[&_button]:!text-lg [&_button]:!font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400">
            <Tabs.Tab value="about" >About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmp/></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
