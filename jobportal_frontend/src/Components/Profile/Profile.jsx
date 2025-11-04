import {
  
  Avatar,
  Divider,
  FileInput,
  Overlay,
 
} from "@mantine/core";
import React, { useEffect, useState } from "react";

import { getProfile } from "../../Services/ProfileSevice";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile, setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { BiSolidEdit } from "react-icons/bi";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const {hovered,ref}=useHover();

  



  const handleFileChange = async (image) =>{

    let picture= await getBase64(image) 
    let updatedProfile={...profile,picture:picture.split(',')[1]}
    

    dispatch(changeProfile(updatedProfile))
    successNotification("Success","Profile picture updated sucessfully!")

  }


  











  return (
    <div className="w-4/5 mx-auto mb-10 mt-10 max-lg:w-full">


      <div className="px-4">

        <div className="relative">
          <img className="rounded-t-2xl h-46 max-md:h-40 max-xs:!h-32  max-sm:h-36 w-full" src="./src/assets/banner.jpg"
          alt="banner"/>

          <div ref={ref} className="absolute -bottom-1/3 max-md:-bottom-11.5 max-md:left-4 max-sm:-bottom-12 left-6 max-sm:left-2 max-xs:left-2.5 max-xs:-bottom-10 flex items-center justify-center ">

          <Avatar className="w-48! h-48! max-md:!w-40 max-md:!h-40 border-mine-shaft-950 border-8 rounded-full max-sm:!h-36 max-sm:!w-36 max-xs:!h-32 max-xs:!w-32" src={profile.picture ? `data:image/jpeg;base64,${profile.picture}`:"./src/assets/avatar-9.png"}/>


          {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}

          {hovered && <BiSolidEdit className="absolute z-[300] text-bright-sun-400 w-16 h-16" /> }

          {hovered && <FileInput onChange={handleFileChange} className="absolute w-full z-[1000] h-full  [&_*]:!rounded-full [&_*]:!h-full " variant="transparent"   accept="image/png, image/jpeg" /> }

          </div>

        </div>





      </div>








      

      <div className="px-4 mt-18 max-[768px]:mt-15 max-xs:mt-12">
        <Info  />
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <About />
      <Divider my="xl" mx="xs" orientation="horizontal" />

      <Skills />

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <Experience />

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <Certificate />
    </div>
  );
};

export default Profile;
