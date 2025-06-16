import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Navlinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 border-t-2" : "text-mine-shaft-300";
  };

  return (
    <div className='flex gap-5 items-center  h-full '>
      <h2
        onClick={() => navigate("/find-jobs")}
        className={`${isActive("/find-jobs")} cursor-pointer  h-full flex items-center justify-center px-2`}
      >
        Find job
      </h2>
      <h2
        onClick={() => navigate("/findTalent")}
        className={`${isActive("/findTalent")} cursor-pointer h-full flex items-center justify-center px-2`}
      >
        Find Talent
      </h2>
      <h2
        onClick={() => navigate("/uploadJob")}
        className={`${isActive("/uploadJob")} cursor-pointer h-full flex items-center justify-center px-2`}
      >
        Upload Job
      </h2>
      <h2
        onClick={() => navigate("/aboutus")}
        className={`${isActive("/aboutus")} cursor-pointer h-full flex items-center justify-center px-2`}
      >
        About Us
      </h2>
    </div>
  );
};

export default Navlinks;
