import React, { useEffect } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { useState } from "react";
import { getAllProfiles } from "../../Services/ProfileSevice";
import { useSelector } from "react-redux";

const Talents = () => {
  const [talents,setTalents]=useState([])
  const filter= useSelector((state)=>state.filter)

  const [filterdTalents,setFilterdTalents]=useState([])



  useEffect(()=>{

    getAllProfiles()
    .then((res)=>{
      setTalents(res)
    })
    .catch((err)=>{  
      console.log(err)
    })
    

  },[])


   useEffect(()=>{

    let filterTalent=talents;
    console.log(filter)
   
   

    if(filter.name){
      filterTalent=filterTalent.filter((talent)=>talent.name?.toLowerCase().includes(filter.name.toLowerCase()));
    }

      
      setFilterdTalents(filterTalent)
      console.log(filterTalent)
      
    

    
    

  },[filter,talents])



  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold "> Talents</div>
        <div>
          <Sort />
        </div>
      </div>

      <div className="flex gap-6 flex-wrap w-full mt-10 justify-between  ">
        {filterdTalents?.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
