import React from "react";
import Marquee from "react-fast-marquee";

const Companies = () => {
  const companies = ["Google", "Amazon", "Figma", "Netflix", "Meta", "Microsoft", "Pinterest", "Slack", "Spotify", "Oracle", "Walmart"];
  return (
    <div className="mt-20 w-full ">
      <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-10">
        Trusted By <span className="text-bright-sun-400">1000+ </span>companies
      </div>


      <Marquee pauseOnHover={true} speed={40}>

        {
          companies.map((company,index)=><div key={index} className="mx-15 py-1 px-2  hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
            <img className="h-20" src={`./src/assets/Companies/${company}.png`} alt={company} />
          </div>)

        }

        
        

      </Marquee>



    </div>
  );
};

export default Companies;
