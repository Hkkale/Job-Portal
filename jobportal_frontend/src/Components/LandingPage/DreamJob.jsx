import React from "react";
import { TextInput, Avatar } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

const DreamJob = () => {
  return (
    <div className="flex max-[1100px]:px-10 max-[870px]:px-5 px-20 items-center max-[870px]:flex-col mt-8 max-[491px]:mt-0 ">
      <div className="flex  flex-col items-left max-[1100px]:mt-20 justify-left max-[870px]:items-center  w-[50%] max-[870px]:w-full h-full">
        <div className="text-6xl max-[1003px]:text-5xl max-[1003px]:leading-16 font-bold max-[800px]:text-4xl max-[800px]:leading-14 max-[738px]:text-3xl max-[491px]:text-xl max-[343px]:text-lg pr-22  leading-18 max-[870px]:leading-normal text-mine-shaft-100 tracking-wide max-[870px]:pr-0 max-[313px]:text-center text-left max-[312px]:leading-snug">
          Find your <span className="text-bright-sun-400">dream job </span>with
          us
        </div>
        <div className="text-white mt-3 max-[870px]:mt-2 max-[1100px]:tracking-normal  tracking-wide max-[1100px]:pr-35 max-[870px]:pr-0 pr-44 max-[800px]:text-sm max-[738px]:text-xs text-justify max-[491px]:text-[10px] max-[549px]:text-center max-[491px]:mt-1">
          Good Life begins with a good company. Start explore thousands of jobs
          in one place
        </div>

        <div className="flex gap-3 max-[870px]:flex-wrap max-[870px]:flex-col max-[870px]: w-full max-[870px]:justify-center mt-5 max-[870px]:items-center  ">
          <TextInput
            className="bg-mine-shaft-900 max-[870px]:w-[50%] rounded-lg px-2 py-1 text-mine-shaft-100 h-fit [&_input]:!text-mine-shaft-100 max-[1100px]:[&_input]:!text-xs max-[1100px]:[&_label]:!text-xs max-[870px]:w-[50%] max-[870px]:px-2 max-[870px]:py-1 max-[491px]:w-[75%] w-[30%] shrink-0 max-[462px]:w-[80%]"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 max-[870px]:w-[50%] rounded-lg px-2 py-1 text-mine-shaft-100 h-fit [&_input]:!text-mine-shaft-100 max-[1100px]:[&_input]:!text-xs max-[1100px]:[&_label]:!text-xs max-[870px]:w-[50%] max-[870px]:px-2 max-[870px]:py-1 max-[491px]:w-[75%] w-[30%] shrink-0 max-[462px]:w-[80%]"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />

          <div className="bg-bright-sun-400 w-20 max-[870px]:h-12 h-auto rounded-lg flex items-center justify-center min-w-14  max-[870px]:w-[15%] cursor-pointer hover:bg-bright-sun-500 shrink-0">
            <IoSearch className="text-mine-shaft-100 text-6xl max-[1100px]:text-5xl max-[870px]:text-4xl" />
          </div>
        </div>
      </div>

      <div className="h-full w-[50%]  flex items-center justify-center max-[870px]:w-full max-[870px]:mt-10 ">
        <div className=" w-145 max-[420px]:w-80  relative">
          <img src="./src/assets/Boy.png" alt="boy" className="" />
          <div className="w-fit border border-bright-sun-400 rounded-md p-2  backdrop-blur-md absolute top-[55%] -right-0 max-[420px]:top-[98%] max-[420px]:right-2 max-[355px]:hidden">
            <div className="text-center max-[1100px]:text-xs text-mine-shaft-100 text-sm ">
              10K+ got job
            </div>
            <Avatar.Group>
              <Avatar  src="./src/assets/avatar-7.png" />
              <Avatar src="./src/assets/avatar-8.png" />
              <Avatar src="./src/assets/avatar-9.png" />
              <Avatar  >+9K</Avatar>
            </Avatar.Group>
          </div>

          <div className="w-fit border border-bright-sun-400 rounded-md p-2 backdrop-blur-md absolute top-[32%] -left-0 max-[420px]:top-[98%] flex flex-col gap-3 max-[1100px]:gap-1.5 max-[355px]:hidden">
            <div className="flex gap-2  items-center">
              <div className="w-10 h-10 max-[1100px]:h-8 max-[1100px]:w-8 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="./src/assets/Google.png" alt="" />
              </div>
              <div className="text-sm max-[1100px]:text-xs text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 max-[1100px]:text-[11px] ">New York</div>
              </div>
            </div>

            <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around max-[1100px]:text-[11px]">
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
