import React from "react";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = (props) => {
  
  return (
    <div>
      <div className="text-xl font-semibold mb-5 text-mine-shaft-100">
        Recommended Talent
      </div>

      <div className="flex flex-wrap flex-col gap-5 ">
        {props?.map(
          (talent, index) => index < 4 && <TalentCard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;
