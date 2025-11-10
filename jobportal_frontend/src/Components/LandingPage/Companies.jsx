import React from "react";
import Marquee from "react-fast-marquee";

const Companies = () => {
  const companies = ["Google", "Amazon", "Figma", "Netflix", "Meta", "Microsoft", "Pinterest", "Slack", "Spotify", "Oracle", "Walmart"];
  return (
    <div className="mt-20 max-[420px]:mt-30 max-[355px]:mt-10 w-full ">
      <div className="text-4xl max-[1003px]:text-3xl max-[800px]:text-2xl max-[491px]:text-xl max-[343px]:text-lg max-[491px]:mb-6 font-semibold text-mine-shaft-100 text-center mb-10">
        Trusted By <span className="text-bright-sun-400">1000+ </span>companies
      </div>


      <Marquee pauseOnHover={true} speed={40}>

        {
          companies.map((company,index)=><div key={index} className="mx-15 max-[1003px]:mx-12 max-[800px]:mx-10 max-[491px]:mx-8  max-[343px]:mx-6 py-1 px-2  hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
            <img className="h-20  max-[1003px]:h-18 max-[800px]:h-15 max-[491px]:h-12 max-[343px]:h-10" src={`./src/assets/Companies/${company}.png`} alt={company} />
          </div>)

        }

        
        

      </Marquee>



    </div>
  );
};

export default Companies;
