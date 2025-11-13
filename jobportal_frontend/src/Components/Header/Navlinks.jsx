import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Navlinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname;

  if(path.startsWith("/post-job/")){
    path="/post-job/0"

  }
  else if(path.startsWith("/posted-jobs/")){
    path="/posted-jobs/0"
  }

  const user= useSelector((state)=>state.user)


  let links= [
    {name:"Find job",url:"/find-jobs"},
    {name:"Find Talent",url:"/find-talent"},
    {name:"Post Job",url:"/post-job/0"},
    {name:"Posted Job",url:"/posted-jobs/0"},
    {name:"Job History",url:"/job-history"},
    
    
  ]

  console.log(user?.accountType)

  if (!user) {
  links.push({ name: "Sign Up", url: "/signup" });
} else if (user.accountType === "APPLICANT") {
  // remove specific links
  
  const removeList = ["/find-talent", "/post-job/0", "/posted-jobs/0"];
  links = links.filter(link => !removeList.includes(link.url));
}
else if(user.accountType === "EMPLOYER"){

  const removeList = ["/find-jobs", "/job-history"];

  
  links = links.filter(link => !removeList.includes(link.url));

}

  console.log(links)

  const isActive = (pathName) => {
    return path === pathName ? "text-bright-sun-400 border-t-2" : "text-mine-shaft-300";
  };

  return (
    <div className="max-[900px]:hidden! flex gap-4.5 items-center h-full">
      
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
