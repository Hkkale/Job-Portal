import { Avatar } from "@mantine/core";
import React from "react";

const Working = () => {
const work = [
{
"name": "Build Your Resume",
"desc": "Create a standout resume with your skills."
},
{
"name": "Apply for Job",
"desc": "Find and apply for jobs that match your skills."
},
{
"name": "Get Hired",
"desc": "Connect with employers and start your new job."
}
]
  return (
    <div className="mt-15  w-full ">
      <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3 ">
        How it <span className="text-bright-sun-400">works </span>
      </div>

      <div className="text-lg mx-auto text-mine-shaft-300 text-center mb-15 w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>



      <div className="flex w-full  px-35 justify-between items-center ">
        <div className="relative ">
          <img
            className="w-[40rem]"
            src="./src/assets/Working/Girl.png"
            alt="girl"
          />
          <div className="w-36 flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md top-[24%] absolute right-10">
            <Avatar className="!h-16 !w-16" src="./src/assets/avatar-7.png"/>
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
            <div className="text-xs text-bright-sun-400 ">70% Completed</div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {
            work.map((item,index)=><div key={index} className="flex items-center gap-4">
            <div className="p-2.5 bg-bright-sun-300 rounded-full">
              <img className="h-12 w-12" src={`./src/assets/Working/${item.name}.png`} alt={item.name} />
            </div>
            <div>
              <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
              <div className="text-mine-shaft-300">{item.desc}</div>
            </div>
          </div>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Working;
