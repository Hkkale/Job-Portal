import React from "react";
import { TextInput, Avatar } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

const DreamJob = () => {
  return (
    <div className="flex  border-white px-20 items-center h-155   ">
      <div className="flex flex-col items-center justify-center  w-[50%]  h-full">
        <div className="text-6xl font-bold pr-22 leading-18 text-mine-shaft-100 tracking-wide ">
          Find your <span className="text-bright-sun-400">dream job </span>with
          us
        </div>
        <div className="text-white mt-3 tracking-wide pr-44">
          Good Life begins with a good company. Start explore thousands of jobs
          in one place
        </div>

        <div className="flex gap-3 w-full  mt-5 ">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 w-[30%]"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 w-[30%]"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />

          <div className="bg-bright-sun-400 w-[12%] rounded-lg flex items-center justify-center h-18 cursor-pointer hover:bg-bright-sun-500">
            <IoSearch className="text-mine-shaft-100 text-6xl" />
          </div>
        </div>
      </div>

      <div className="h-full w-[50%]  flex items-center justify-center">
        <div className=" w-[38rem] relative ">
          <img src="./src/assets/Boy.png" alt="boy" className="" />
          <div className="w-fit border border-bright-sun-400 rounded-md p-2 backdrop-blur-md absolute top-[55%] -right-0 ">
            <div className="text-center text-mine-shaft-100 text-sm">
              10K+ got job
            </div>
            <Avatar.Group>
              <Avatar src="./src/assets/avatar-7.png" />
              <Avatar src="./src/assets/avatar-8.png" />
              <Avatar src="./src/assets/avatar-9.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>

          <div className="w-fit border border-bright-sun-400 rounded-md p-2 backdrop-blur-md absolute top-[32%] -left-0 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="./src/assets/Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs ">New York</div>
              </div>
            </div>

            <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
