import { Avatar, Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import ExpCard from "./ExpCard";
import CertifiCard from "./CertifiCard";
import { useParams } from "react-router";
import { getProfile } from "../../Services/ProfileSevice";
import { FaUserTie } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";

const Profile = () => {
  const id = useParams().id;
  const [profile, setProfile] = useState({});
  const matches= useMediaQuery('(max-width: 650px)');

  useEffect(() => {
    window.scrollTo(0, 0);

    getProfile(id)
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);


  console.log("Profileeee Data:", profile); // Log the profile data

  return (
    <div className="w-[65%] max-[1170px]:w-full ">
      <div className="relative ">
        <img
          className="rounded-t-2xl h-46 max-md:h-40 max-xs:!h-32  max-sm:h-36 w-full"
          src="/src/assets/banner.jpg"
          alt="banner"
        />

        <div className="absolute -bottom-1/3 max-md:-bottom-11.5 max-md:left-4 max-sm:-bottom-12 left-6 max-sm:left-2 max-xs:left-2.5 max-xs:-bottom-10 flex items-center justify-center ">
          <Avatar
            className="w-48! h-48! max-md:!w-40 max-md:!h-40 border-mine-shaft-950 border-8 rounded-full max-sm:!h-36 max-sm:!w-36 max-xs:!h-32 max-xs:!w-32"
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : "./src/assets/avatar-9.png"
            }
          />
        </div>
      </div>

      <div className="px-3 mt-16">
        <div className="text-3xl max-sm:text-2xl font-semibold flex justify-between  max-[350px]:text-xl">
          {profile?.name}
          <Button
  size={matches ? "xs" : "md"}
  color="brightSun.4"
  variant="light"
  component="a"
  href={`mailto:${profile?.email}`}
>
  Message
</Button>

        </div>
        <><div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 ">
                  <FaBriefcase className="h-4 w-4 shrink-0" /> {profile.jobTitle} &bull;{" "}
                  {profile.company}{" "}
                </div>
        
                <div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 max-xs:mt-1">
                  
                  <GrLocation className="h-4 w-4 shrink-0" />
                  {profile.location}
                </div>
        
                <div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 max-xs:mt-1">
                  
                  <FaUserTie className="h-4 w-4 shrink-0" />
                 Experience: {profile.totalExp} Years
                </div>
                
                </>
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl">About</div>
        <div className="text-sm max-[350px]:text-xs text-mine-shaft-300 text-justify">
          {profile.about}
        </div>
      </div>
      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl flex-wrap">Skills</div>
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill, index) => (
            <div
              key={index}
              className="bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1 max-[350px]:text-xs"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl">Experience</div>

        <div className="flex flex-col gap-8">
          {profile?.experiences?.map((exp, index) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider my="xl" mx="xs" orientation="horizontal" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 ">Certifications</div>

        <div className="flex flex-col gap-8">
          {profile?.certifications?.map((certi, index) => (
            <CertifiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
