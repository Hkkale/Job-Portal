import React, { useState } from "react";
import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { FaArrowLeftLong, FaPaperclip } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../Services/Utilities";





const ApplyJobComp = (props) => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSubmit(true);

    let x = 5;
    const interval = setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        clearInterval(interval);
        navigate("/find-jobs");
      }
    }, 1000);
  };

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`/src/assets/Icons/${props.company}.png`}
              alt="Company Logo"
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className="text-lg text-mine-shaft-300 flex flex-wrap gap-2">
              <span className="font-semibold">{props.company}</span> &#x2022;
              <span className="font-semibold">{timeAgo(props.postTime)}</span> &#x2022;
              <span className="font-semibold">
                {props.applicants ? props.applicants.length : 0} Applicants
              </span>
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl" />

      <ApplicationForm />
    </div>
  );
};

export default ApplyJobComp;
