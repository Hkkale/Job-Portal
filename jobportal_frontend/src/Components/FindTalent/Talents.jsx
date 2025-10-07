import React, { useEffect } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { useState } from "react";
import { getAllProfiles } from "../../Services/ProfileSevice";

const Talents = () => {
  const [talents,setTalents]=useState([])

  useEffect(()=>{

    getAllProfiles()
    .then((res)=>{
      setTalents(res)
    })
    .catch((err)=>{  
      console.log(err)
    })
    

  },[talents])
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold "> Talents</div>
        <div>
          <Sort />
        </div>
      </div>

      <div className="flex gap-6 flex-wrap w-full mt-10 justify-between  ">
        {talents?.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
