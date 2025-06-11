import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Navlinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 border-b-2" : "text-mine-shaft-300";
  };

  return (
    <div className='flex gap-5 items-center  h-full '>
      <h2
        onClick={() => navigate("/findJob")}
        className={`${isActive("/findJob")} cursor-pointer `}
      >
        Find job
      </h2>
      <h2
        onClick={() => navigate("/findTalent")}
        className={`${isActive("/findTalent")} cursor-pointer`}
      >
        Find Talent
      </h2>
      <h2
        onClick={() => navigate("/uploadJob")}
        className={`${isActive("/uploadJob")} cursor-pointer`}
      >
        Upload Job
      </h2>
      <h2
        onClick={() => navigate("/aboutus")}
        className={`${isActive("/aboutus")} cursor-pointer`}
      >
        About Us
      </h2>
    </div>
  );
};

export default Navlinks;
