import React from "react";
import TalentCard from "../FindTalent/TalentCard";
import { useParams } from "react-router";

const RecommendTalent = (props) => {
  // Access the talents array from props

  const {id}=useParams()
  console.log(id)
   
  
  return (
    <div>
      <div className="text-xl font-semibold mb-5 text-mine-shaft-100">
        Recommended Talent
      </div>

      <div className="flex flex-wrap flex-col gap-5 ">
        {props?.talents?.map((talent, index) => 
          index < 4 && id!=talent.id && <TalentCard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;