import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { FaBriefcase } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { ActionIcon } from '@mantine/core'
import { FaRegSave } from 'react-icons/fa'
import { GoBriefcase, GoPencil } from 'react-icons/go'
import { hasLength, isEmail, useForm } from '@mantine/form';

const Info = () => {

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

  const [edit, setEdit] = useState(false);

  const handleEdit =()=>{

    if(!edit){
      setEdit(true);

    }
    else{
      setEdit(false)
      console.log(form.getValues())
    }

    // Here you would typically dispatch an action to update the profile in the store
    // dispatch(updateProfile(profile));

  }
  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '' },
    
  });
  return (
    <>

    <div className="text-3xl font-semibold flex justify-between">
          {profile.name}
          <ActionIcon onClick={()=>handleEdit()} size="lg" color="brightSun.4" variant="subtle">
            {edit ? <FaRegSave className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>


        {

          edit ?  <> <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

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
      
    </>
  )
}

export default Info
