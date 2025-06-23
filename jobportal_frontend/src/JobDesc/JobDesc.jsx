import { ActionIcon, Button, Divider } from "@mantine/core";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const JobDesc = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between  ">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center  cursor-pointer"
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`./src/assets/Icons/Google.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300 ">
              Google &#x2022; 3 days ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Button
            onClick={() => navigate("/apply-job")}
            size="sm"
            color="brightSun.4"
            variant="light"
          >
            Apply
          </Button>
          <FaRegBookmark className="text-bright-sun-400 cursor-pointer" />
        </div>
      </div>

      <Divider my="xl" />

      
        <div className="flex gap">
          <div className="flex flex-col items-center">
            <ActionIcon
              color="brightSun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <HiOutlineLocationMarker
                className="h-4/5 w-4/5"
                
              />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">Location</div>
            <div className=" font-semibold">New York</div>
          </div>
        </div>
      
    </div>
  );
};

export default JobDesc;
