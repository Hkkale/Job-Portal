import React from "react";
import TalentCard from "../FindTalent/TalentCard";
import { useParams } from "react-router";

const RecommendTalent = (props) => {
  // Access the talents array from props

  const {id}=useParams()
  console.log(id)
   
  
  return (
    <div className="w-[30%] max-[1170px]:w-full ">
      <div className="text-xl font-semibold mb-5 text-mine-shaft-100 max-[1170px]:mt-10">
        Recommended Talent
      </div>

      <div className="flex flex-wrap flex-col gap-5 max-[1170px]:flex-row ">
        {props?.talents?.map((talent, index) => 
          index < 4 && id!=talent.id && <TalentCard recTalent key={index} {...talent} />
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;