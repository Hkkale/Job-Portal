import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";

import { getProfile } from "../../Services/ProfileSevice";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";

const Profile = () => {
  

 

  const user= useSelector((state)=>state.user)
   const profile= useSelector((state)=>state.profile)

  const [edit, setEdit] = useState([false,false,false, false, false])

 
  

  const dispatch= useDispatch();
  

  const handleEdit = (index) =>{

    const newEdit=[...edit];
    newEdit[index]=!newEdit[index];
    setEdit(newEdit);
   

  }

  useEffect(()=>{
    
    getProfile(user.id)
    .then((data)=>{
      console.log(data)
      dispatch(setProfile(data))

    })
    .catch((err)=>console
  .log(err))
  },[])


  


  return (
    <div className="w-4/5 mx-auto mb-10 mt-10">
      <div className="relative ">
        <img
          className="rounded-t-2xl h-45 w-full"
          src="./src/assets/banner.jpg"
          alt="banner"
        />

        <img
          className="rounded-full w-48 h-48 -bottom-1/4 absolute left-3  border-mine-shaft-950 border-8"
          src="./src/assets/avatar-9.png"
          alt=""
        />
      </div>

      <div className="px-3 mt-16">
        <Info profile={profile}/>


        







        
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <About/>
      <Divider my="xl" mx="xs" orientation="horizontal" />

      <Skills/>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <Experience/>

      <Divider my="xl" mx="xs" orientation="horizontal" />

     
      <Certificate/>
    </div>
  );
};

export default Profile;
