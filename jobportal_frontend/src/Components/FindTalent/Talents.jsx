import React, { useEffect } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { useState } from "react";
import { getAllProfiles } from "../../Services/ProfileSevice";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Talents = () => {
  const [talents,setTalents]=useState([])
  const filter= useSelector((state)=>state.filter)
  const sort= useSelector((state)=>state.sort)
  const dispatch =useDispatch()

  const [filterdTalents,setFilterdTalents]=useState([])



  useEffect(()=>{

    dispatch(resetFilter())
    dispatch(resetSort())

    getAllProfiles()
    .then((res)=>{
      setTalents(res)
    })
    .catch((err)=>{  
      console.log(err)
    })
    

  },[])
 
  useEffect(()=>{
      if(sort=="Most Recent"){
  setTalents([...talents].sort((a, b) => new Date(b. postTime).getTime() -
  new Date(a.postTime).getTime()));
  }
  else if(sort=="Experience: Low to High") {
  setTalents([...talents].sort((a,b)=> a.totalExp - b.totalExp));
  }
  else if(sort=="Experience: High to Low"){
  setTalents ([... talents].sort((a, b) => b.totalExp -
  a.
totalExp));
  }
      
    },[sort])

   useEffect(()=>{

    let filterTalent=talents;
    console.log(filter)
   
   

    if(filter.name){
      filterTalent=filterTalent.filter((talent)=>talent.name?.toLowerCase().includes(filter.name.toLowerCase()));
    }



    if(filter["Job Title"] && filter["Job Title"].length>0){
      filterTalent=filterTalent.filter((talent)=>filter["Job Title"].some((title)=>talent.jobTitle?.toLowerCase().includes(title.toLowerCase())));
    }


    if(filter.Location && filter.Location.length>0){

      filterTalent=filterTalent.filter((talent)=>filter.Location?.some((location)=>talent.location?.toLowerCase().includes(location.toLowerCase())));


    }
     if(filter.Skills && filter.Skills.length>0){

      filterTalent=filterTalent.filter((talent)=>filter.Skills?.some((skill)=>talent.skills?.some((talentSkill)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));


     }

     if(filter.exp && filter.exp.length>0){

      filterTalent=filterTalent.filter((talent)=>filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1]);


     }





      
    setFilterdTalents(filterTalent)
    console.log(filterTalent)
      
    

    
    

  },[filter,talents])



  return (
    <div className="p-5 ">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold "> Talents</div>
        <div>
          <Sort />
        </div>
      </div>

      <div className="flex gap-6 flex-wrap w-full mt-10  justify-start">
        {filterdTalents.length>0?filterdTalents?.map((talent, index) => talent.accountType =="APPLICANT" &&(
          <TalentCard key={index} {...talent} />
        )):<div className="text-2xl font-semibold ">No Talents Found</div>}
      </div>
    </div>
  );
};

export default Talents;