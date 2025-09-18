import { ActionIcon, Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaRegBookmark,FaBookmark } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { BiBoltCircle } from "react-icons/bi";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
const JobDesc = (props) => {
  const profile=useSelector((state)=>state.profile);
  const user=useSelector((state)=>state.user);

    const dispatch= useDispatch();
    const [applied,setApplied]=useState(false);
  const handleSaveJob=()=>{
    let savedJobs=profile.savedJobs?[...profile.savedJobs]:[];


    if(savedJobs?.includes(props.id)){
      savedJobs=savedJobs.filter((jobId)=>jobId!==props.id)
    }
    else{
      savedJobs=[...savedJobs,props.id]
    }

    let updatedProfile={...profile,savedJobs:savedJobs};
    dispatch(changeProfile(updatedProfile))
    console.log(updatedProfile);

  }

  console.log(props.applicants)
  console.log(user.id)
  console.log(props)
  
  useEffect(()=>{
   if(props.applicants?.filter((applicant)=>applicant.applicantId===user.id).length>0){
    setApplied(true)
   }
   else{
    setApplied(false)
   }
  },[props])
 
  const card = [
    { name: "Location", icon: MdOutlineLocationOn, value: "New York",id:"location" },
    { name: "Experience", icon: HiOutlineBriefcase, value: "Expert" ,id:"experience" },
    { name: "Salary", icon: RiMoneyRupeeCircleLine, value: "48 LPA",id:"packageOffered"  },
    { name: "Job Type", icon: BiBoltCircle, value: "Full Time" ,id:"jobType" },
  ];

  

  const data = DOMPurify.sanitize(props.description);

  const skills = [
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "Express",
    "Django",
    "PostgreSQL",
  ];

  const navigate= useNavigate();
  return (
    <div className="w-2/3">
      <div className="flex justify-between  ">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center  cursor-pointer"
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`/src/assets/Icons/${props.company}.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className="text-lg text-mine-shaft-300 ">
              {props.company} &#x2022; {timeAgo(props.postTime)} &#x2022;  {props.applicants ? 
    (typeof props.applicants === 'object' ? 
      Object.keys(props.applicants).length : 
      props.applicants
    ) : 0
  } Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
         { (props.edit || !applied) &&<Button
            onClick={() => navigate(`/apply-job/${props.id}`)}
            size="sm"
            color="brightSun.4"
            variant="light"
          >
            {props.edit ? "Edit" : "Apply"}
          </Button>}
          { applied &&
             <Button
            
            size="sm"
            color="green.8"
            variant="light"
          >
            Applied
          </Button>
          }
          {props.edit ? <Button
            onClick={() => navigate("/apply-job")}
            size="sm"
            color="red.5"
            variant="outline"
          >
            Delete
          </Button>:profile.savedJobs?.includes(props.id) ?<FaBookmark onClick={()=>handleSaveJob()} className=' cursor-pointer text-bright-sun-400'/>:<FaRegBookmark onClick={()=>handleSaveJob()} className='text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400'/>}
        </div>
      </div>

      <Divider my="xl" />

      <div className="flex  justify-between">
        {card.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="brightSun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className=" font-semibold">{props?props[item.id]:"NA"} {item.id==="packageOffered"?"LPA":""}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">Required Skills</div>

        <div className="flex flex-wrap gap-2">
          {props?.skillsRequired?.map((skill, index) => (
            <ActionIcon
              p="xs"
              key={index}
              color="brightSun.4"
              className="!h-fit !w-fit !text-sm !font-medium"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_p]:text-justify "
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">About Company</div>

        <div>
          <div className="flex justify-between  ">
            <div
              onClick={() => navigate("/jobs")}
              className="flex gap-2 items-center  cursor-pointer"
            >
              <div className="p-3 bg-mine-shaft-800 rounded-xl">
                <img
                  className="h-8"
                  src={`/src/assets/Icons/${props.company}.png`}
                  alt=""
                />
              </div>
              <div>
                <div className="font-medium text-lg">
                  {props.company}
                </div>
                <div className="text-lg text-mine-shaft-300 ">10K+ Employees
                </div>
              </div>
            </div>
            
              <Button
                onClick={() => navigate(`company/${props.company}`)}
                
                color="brightSun.4"
                variant="light"
              >
                Company Page
              </Button>
              
            
          </div>

          <div className="text-mine-shaft-300 text-justify pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe ducimus, odit dolores sunt placeat delectus sint sapiente est eveniet ad quas, maxime aut vel obcaecati sed molestias eaque pariatur aspernatur! Praesentium voluptatibus rerum distinctio officiis? Nemo, necessitatibus cupiditate. Voluptatibus!</div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
