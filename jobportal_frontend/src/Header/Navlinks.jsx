import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Navlinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;


  const links= [
    {name:"Find job",url:"/find-jobs"},
    {name:"Find Talent",url:"/find-talent"},
    {name:"Post Job",url:"/post-job"},
    {name:"About us",url:"/about"},
    
  ]

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 border-t-2" : "text-mine-shaft-300";
  };

  return (
    <div className='flex gap-5 items-center  h-full '>
      
      {
        links.map((link,index)=><h2 key={index}
        onClick={() => navigate(link.url)}
        className={`${isActive(link.url)} cursor-pointer  h-full flex items-center justify-center px-2`}
      >
        {link.name}
      </h2>)
      }
    </div>
  );
};

export default Navlinks;
