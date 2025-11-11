import { Avatar } from "@mantine/core";
import React from "react";
import {useNavigate} from "react-router"

const Working = () => {
  const navigate=useNavigate();
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
    <div className="mt-15 w-full ">
      <div className="text-4xl max-[1003px]:text-3xl max-[800px]:text-2xl max-[491px]:text-xl max-[343px]:text-lg  font-semibold text-mine-shaft-100 text-center mb-3 ">
        How it <span className="text-bright-sun-400">works </span>
      </div>

      <div className="text-lg max-[1003px]:text-base max-[800px]:text-sm max-[491px]:text-xs  mx-auto text-mine-shaft-300 text-center mb-12 max-[800px]:w-11/12 w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>



      <div className="flex w-full  px-5 max-[500px]:px-2 justify-evenly items-center max-[810px]:flex-col-reverse cursor-pointer  ">
        <div className="relative  max-[810px]:mt-10">
          <img
            className="w-[40rem]"
            src="./src/assets/Working/Girl.png"
            alt="girl"
          />
          <div onClick={()=>navigate("/profile")} className="w-36 flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md top-[24%] absolute right-10  max-[500px]:top-0 max-[500px]:right-0   max-[400px]:hidden cursor-pointer">
            <Avatar className="h-16! w-16! max-[1000px]:h-12! max-[1000px]:w-12!" src="./src/assets/avatar-7.png"/>
            <div className="text-sm font-semibold text-mine-shaft-200 text-center max-[1000px]:text-xs">Complete your profile</div>
            <div className="text-xs text-bright-sun-400 ">70% Completed</div>
          </div>
        </div>

        <div className="flex flex-col max-[810px]:mt-10 gap-10 ">
          {
            work.map((item,index)=><div key={index} className="flex items-center gap-4 max-[500px]:gap-2">
            <div className="p-2 max-[500px]:p-1 flex items-center justify-center h-18 w-18 max-[500px]:h-14 max-[500px]:w-14 bg-bright-sun-300 rounded-full shrink-0">
              <img className="h-12 w-12 max-[500px]:h-10 max-[500px]:w-10" src={`./src/assets/Working/${item.name}.png`} alt={item.name} />
            </div>
            <div>
              <div className="text-mine-shaft-200 text-xl font-semibold max-[1000px]:text-lg max-[500px]:text-base">{item.name}</div>
              <div className="text-mine-shaft-300 max-[1000px]:text-sm max-[500px]:text-xs">{item.desc}</div>
            </div>
          </div>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Working;
