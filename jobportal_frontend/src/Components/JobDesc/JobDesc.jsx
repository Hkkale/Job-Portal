import { ActionIcon, Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

import { HiOutlineBriefcase } from "react-icons/hi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { BiBoltCircle } from "react-icons/bi";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { postJob } from "../../Services/JobService";
import {
  errorNotifiaction,
  successNotification,
} from "../../Services/NotificationService";
const JobDesc = (props) => {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [applied, setApplied] = useState(false);
  const handleSaveJob = () => {
    let savedJobs = profile.savedJobs ? [...profile.savedJobs] : [];

    if (savedJobs?.includes(props.id)) {
      savedJobs = savedJobs.filter((jobId) => jobId !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }

    let updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(changeProfile(updatedProfile));
    console.log(updatedProfile);
  };

  console.log(props.applicants);
  console.log(user.id);
  console.log(props);

  const handleClose = () => {
    postJob({ ...props, jobStatus: "CLOSED" })
      .then((res) => {
        successNotification("Success", "Job Closed Successfully");
      })
      .close((err) => {
        console.log(err);
        errorNotifiaction("Error", err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    if (
      props.applicants?.filter((applicant) => applicant.applicantId === user.id)
        .length > 0
    ) {
      setApplied(true);
    } else {
      setApplied(false);
    }
  }, [props]);

  const card = [
    {
      name: "Location",
      icon: MdOutlineLocationOn,
      value: "New York",
      id: "location",
    },
    {
      name: "Experience",
      icon: HiOutlineBriefcase,
      value: "Expert",
      id: "experience",
    },
    {
      name: "Salary",
      icon: RiMoneyRupeeCircleLine,
      value: "48 LPA",
      id: "packageOffered",
    },
    { name: "Job Type", icon: BiBoltCircle, value: "Full Time", id: "jobType" },
  ];

  const data = DOMPurify.sanitize(props.description);

  const navigate = useNavigate();
  return (
    <div className="w-2/3 max-[940px]:w-full  max-[940px]:px-3">
      <div className="flex justify-between flex-wrap">
        <div
          
          className="flex gap-2 items-center "
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl shrink-0">
            <img
              className="h-14 max-[580px]:h-10 "
              src={`/src/assets/Icons/${props.company}.png`}
              onError={(e) =>
                (e.currentTarget.src = "/src/assets/letter-j.png")
              }
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold max-[580px]:text-xl text-2xl">{props.jobTitle}</div>
            <div className="text-lg max-[700px]:text-base text-mine-shaft-300 flex flex-wrap gap-2 max-[500px]:gap-0">
                          <span className="font-medium">{props.company}</span> &#x2022;
                          <span className="font-medium">{timeAgo(props.postTime)}</span> &#x2022;
                          <span className="font-medium">
                            {props.applicants ? props.applicants.length : 0} Applicants
                          </span>
                        </div>

            
          </div>
        </div>
        <div className="flex flex-col max-[580px]:flex-row max-[580px]:px-18 max-[580px]:gap-5 max-[580px]:[&>button]:!w-[] gap-2 items-center max-[580px]:mt-1 justify-center">
          {(props.edit || !applied) && (
            <Button
              onClick={() =>
                navigate(
                  props.edit
                    ? `/post-job/${props.id}`
                    : `/apply-job/${props.id}`
                )
              }
              size="md"
              color="brightSun.4"
              variant="light"
            >
              {props.closed ? "Reopen" : props.edit ? "Edit" : "Apply"}
            </Button>
          )}
          {!props.edit && applied && (
            <Button size="sm" color="green.8" variant="light">
              Applied
            </Button>
          )}

          {props.edit && !props.closed ? (
            <Button
              onClick={() => handleClose()}
              size="sm"
              color="red.5"
              variant="outline"
            >
              Close
            </Button>
          ) : profile.savedJobs?.includes(props.id) ? (
            <FaBookmark
              onClick={() => handleSaveJob()}
              className=" cursor-pointer text-bright-sun-400"
            />
          ) : (
            <FaRegBookmark
              onClick={() => handleSaveJob()}
              className="text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400"
            />
          )}
        </div>
      </div>

      <Divider my="xl" />

      <div className="flex justify-between  gap-4 flex-wrap">
        {card.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1  max-[386px]:w-1/3"
          >
            <ActionIcon
              color="brightSun.4"
              className="!h-12 !w-12 max-[450px]:!h-10 max-[450px]:!w-10"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm max-[450px]:text-xs text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold max-[450px]:text-sm">
              {props ? props[item.id] : "NA"}{" "}
              {item.id === "packageOffered" ? "LPA" : ""}
            </div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">Required Skills</div>

        <div className="flex flex-wrap gap-2">
          {props?.skillsRequired?.map((skill, index) => (
            <ActionIcon
              p="xs"
              key={index}
              color="brightSun.4"
              className="!h-fit !w-fit !text-sm !font-medium max-[580px]:!text-xs"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_p]:text-justify  [&_li]:text-sm [&_p]:text-sm "
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">About Company</div>

        <div>
          <div className="flex justify-between max-[450px]:flex-col max-[450px]:gap-2">
            <div
              onClick={() => navigate("/jobs")}
              className="flex gap-2 items-center  cursor-pointer"
            >
              <div className="p-3 bg-mine-shaft-800 rounded-xl shrink-0">
                <img
                  className="h-8 max-[450px]:h-6"
                  src={`/src/assets/Icons/${props.company}.png`}
                  onError={(e) =>
                (e.currentTarget.src = "/src/assets/letter-j.png")
              }
                  alt=""
                />
              </div>
              <div>
                <div className="font-medium text-lg max-[450px]:text-base">{props.company}</div>
                <div className="text-lg max-[450px]:text-sm text-mine-shaft-300 ">
                  10K+ Employees
                </div>
              </div>
            </div>

            <Button
             
              color="brightSun.4"
              variant="light"
            >
              Company Page
            </Button>
          </div>

          <div className="text-mine-shaft-300 max-[450px]:text-sm text-justify pt-3">
            We are a dynamic IT company dedicated to delivering innovative digital solutions that empower businesses to grow and succeed. Our team specializes in software development, web and mobile app development, and custom technology solutions tailored to client needs. With a strong focus on quality, creativity, and performance, we combine cutting-edge technologies with strategic thinking to transform ideas into powerful digital experiences. Whether it's building scalable enterprise applications or designing user-friendly interfaces, we strive to provide reliable, efficient, and future-ready solutions for our clients across various industries.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
