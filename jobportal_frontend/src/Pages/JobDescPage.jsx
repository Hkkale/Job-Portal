import { Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import RecommendedJob from "../Components/JobDesc/RecommendedJob";
import { getJob } from "../Services/JobService";

const JobDescPage = () => {
  const navigate = useNavigate();
  const id=useParams().id;
  console.log("idddddddddddddddddddddddddd",id)
  const [job , setJob]=useState({})

  useEffect(()=>{
    window.scrollTo(0,0);

    getJob(id).then((res)=>{
      setJob(res)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[id])


  return (
    <div className=" min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden">
      <Button
        className="m-4"
        leftSection={<FaArrowLeftLong size={20} />}
        color="brightSun.4"
        onClick={() => navigate("/find-jobs")}
        variant="light"
      >
        {" "}
        Back{" "}
      </Button>

      <div className="flex gap-15 m-4 justify-around max-[940px]:flex-wrap">
        <JobDesc {...job} />
        <RecommendedJob />
      </div>
    </div>
  );
};

export default JobDescPage;
