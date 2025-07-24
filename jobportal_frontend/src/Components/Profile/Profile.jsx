import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaBriefcase, FaPlus } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import ExpCard from "./ExpCard";
import CertifiCard from "./CertifiCard";
import { GoPencil } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
import SelectInput from "./SelectInput";

import { GoBriefcase } from "react-icons/go";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";
import { getProfile } from "../../Services/ProfileSevice";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";

const Profile = () => {
  

 

  const user= useSelector((state)=>state.user)
   const profile= useSelector((state)=>state.profile)

  const [edit, setEdit] = useState([false,false,false, false, false])

  const [about, setAbout] = useState(profile.about);
  const [skills, setSkills] = useState(profile.skills);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  const dispatch= useDispatch();
  

  const handleEdit = (index) =>{

    const newEdit=[...edit];
    newEdit[index]=!newEdit[index];
    setEdit(newEdit);
   

  }

  useEffect(()=>{
    console.log(profile)
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

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between ">About

          <ActionIcon onClick={()=>handleEdit(1)} size="lg" color="brightSun.4" variant="subtle">
            {edit[1]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>

        </div>

        {edit[1] ? <Textarea placeholder="Enter About Yourself..." autosize minRows={3} value={about} defaultValue={about} onChange={(e)=>setAbout(e.currentTarget.value)} /> :<div className="text-sm text-mine-shaft-300 text-justify">
          {profile?.about}
        </div>}



        
      </div>
      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between ">Skills
          <ActionIcon onClick={()=>handleEdit(2)} size="lg" color="brightSun.4" variant="subtle">
            {edit[2]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>

        {edit[2] ? <TagsInput value={skills} onChange={setSkills}  placeholder="Add skills" splitChars={[',', ' ','|']}/>:<div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill, index) => (
            <div
              key={index}
              className="bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>}


        
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2">
          <ActionIcon onClick={()=>setAddExp(true)} size="lg" color="brightSun.4" variant="subtle">
           <FaPlus className="h-4/5 w-4/5 " />
          </ActionIcon>
          <ActionIcon onClick={()=>handleEdit(3)} size="lg" color="brightSun.4" variant="subtle">
            {edit[3]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>
        </div>

        <div className="flex flex-col gap-8">
          {profile?.experiences?.map((exp, index) => (
            <ExpCard key={index} {...exp} edited={edit[3]} />
          ))}

          {addExp && <ExpInput add setEdit={setAddExp}/>}


        </div>
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">Certifications <div className="flex gap-2">
          <ActionIcon onClick={()=>setAddCerti(true)} size="lg" color="brightSun.4" variant="subtle">
           <FaPlus className="h-4/5 w-4/5 " />
          </ActionIcon>
          <ActionIcon onClick={()=>handleEdit(4)} size="lg" color="brightSun.4" variant="subtle">
            {edit[4]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>
        </div>

        <div className="flex flex-col gap-8">
          {profile?.certifications?.map((certi, index) => (
            <CertifiCard key={index} edit={edit[4]} {...certi} />
          ))}
          {addCerti && <CertInput  setEdit={setAddCerti}/>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
