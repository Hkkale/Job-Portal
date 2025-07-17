import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
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

const Profile = () => {
  const profile = {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about:
      "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: [
      "React",
      "SpringBoot",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Python",
      "Django",
      "Figma",
      "Sketch",
      "Docker",
      "AWS",
    ],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description:
          "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.",
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Seattle, United States",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description:
          "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency.",
      },
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG",
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ",
      },
    ],
  };

  const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], value:"Software Engineer", leftSection:GoBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],value:"Google", leftSection:GoBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], value:"New York, United States",leftSection:GrLocation}
]

  const [edit, setEdit] = useState([false,false,false, false, false])

  const [about, setAbout] = useState(profile.about);
  const [skills, setSkills] = useState(profile.skills);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  const handleEdit = (index) =>{

    const newEdit=[...edit];
    newEdit[index]=!newEdit[index];
    setEdit(newEdit);
   

  }


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
        <div className="text-3xl font-semibold flex justify-between">
          {profile.name}
          <ActionIcon onClick={()=>handleEdit(0)} size="lg" color="brightSun.4" variant="subtle">
            {edit[0]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>


        {

          edit[0] ?  <> <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput {...fields[0]}/>
          <SelectInput {...fields[1]}/>
      
        </div>
          <SelectInput {...fields[2]}/>   </>  :<><div className="text-xl flex gap-1 items-center ">
          <FaBriefcase className="h-4 w-4" /> {profile.role} &bull;{" "}
          {profile.company}{" "}
        </div>

        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          {" "}
          <GrLocation className="h-4 w-4" />
          {profile.location}
        </div></>

        }


        







        
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between ">About

          <ActionIcon onClick={()=>handleEdit(1)} size="lg" color="brightSun.4" variant="subtle">
            {edit[1]? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>

        </div>

        {edit[1] ? <Textarea placeholder="Enter About Yourself..." autosize minRows={3} value={about} defaultValue={about} onChange={(e)=>setAbout(e.currentTarget.value)} /> :<div className="text-sm text-mine-shaft-300 text-justify">
          {about}
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
          {skills.map((skill, index) => (
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
          {profile.experience.map((exp, index) => (
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
          {profile.certifications.map((certi, index) => (
            <CertifiCard key={index} edit={edit[4]} {...certi} />
          ))}
          {addCerti && <CertInput  setEdit={setAddCerti}/>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
