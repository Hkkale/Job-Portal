import { Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from "../Components/TalentProfile/Profile";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import { getAllProfiles } from "../Services/ProfileSevice";

const TalentProfilePage = () => {
  
 const [talents,setTalents]=useState([])

  const navigate = useNavigate();
  

  useEffect(()=>{
    console.log("useEffect running..."); // <--- Add this

    getAllProfiles().then((res)=>{
      console.log("API response:", res); // <-- Add this line
      setTalents(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    


  }
  ,[])
  console.log("talentssssssssss",talents)


  return (
    <div className=" min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden">
      <Button
        className="m-4"
        leftSection={<FaArrowLeftLong size={20} />}
        color="brightSun.4"
        onClick={() => navigate(-1)}
        variant="light"
      >
        {" "}
        Back{" "}
      </Button>

      <div className="flex gap-15 m-4 justify-around">
        <Profile  />
        <RecommendTalent talents={talents} />
      </div>
    </div>
  );
};

export default TalentProfilePage;
