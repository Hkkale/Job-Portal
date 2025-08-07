import { Button, Divider } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import RecommendedJob from "../Components/JobDesc/RecommendedJob";

const JobDescPage = () => {
  const navigate = useNavigate();
  const id=useParams();
  const [job , setJob]=useState({})
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

      <div className="flex gap-15 m-4 justify-around ">
        <JobDesc />
        <RecommendedJob />
      </div>
    </div>
  );
};

export default JobDescPage;
