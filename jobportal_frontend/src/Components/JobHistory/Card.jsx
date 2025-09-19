import React, { useState, useEffect } from 'react';
import { Button, Divider, Text } from "@mantine/core";
import { FaRegCalendarAlt, FaBookmark, FaRegBookmark, FaRegClock } from "react-icons/fa";
import { timeAgo } from "../../Services/Utilities";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";

const Card = (props) => {
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);

  // Update local state when profile changes
  useEffect(() => {
    if (profile.savedJobs && props.id) {
      setIsSaved(profile.savedJobs.includes(props.id));
    }
  }, [profile.savedJobs, props.id]);

  const handleSaveJob = () => {
    let savedJobs = profile.savedJobs ? [...profile.savedJobs] : [];
    
    if (savedJobs.includes(props.id)) {
      // Remove job from saved jobs
      savedJobs = savedJobs.filter((jobId) => jobId !== props.id);
    } else {
      // Add job to saved jobs
      savedJobs = [...savedJobs, props.id];
    }

    const updatedProfile = { ...profile, savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  return (
    <div className="bg-mine-shaft-900 p-4 w-72 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`./src/assets/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} • {props.applicants?.length || 0} Applicants
            </div>
          </div>
        </div>
        <div onClick={handleSaveJob} className="cursor-pointer">
          {isSaved ? (
            <FaBookmark className="text-bright-sun-400" />
          ) : (
            <FaRegBookmark className="text-mine-shaft-300 hover:text-bright-sun-400" />
          )}
        </div>
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text className="!text-xs text-justify !text-mine-shaft-300 min-h-[3.6em]" lineClamp={3}>
        {props.about}
      </Text>

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          ₹{props.packageOffered} LPA
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          <FaRegClock className="h-4 w-4" />
          {props.applied
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : props.interviewing
            ? "Applied "
            : "Posted "}
          {timeAgo(props.postTime)}
        </div>
      </div>

      {props.offered && (
        <>
          <Divider color="mineShaft.7" size="xs" orientation="horizontal" />
          <div className="flex gap-2">
            <Button color="brightSun.4" variant="outline" fullWidth>
              Accept
            </Button>
            <Button color="brightSun.4" variant="light" fullWidth>
              Reject
            </Button>
          </div>
        </>
      )}

      {props.interviewing && (
        <>
          <Divider color="mineShaft.7" size="xs" orientation="horizontal" />
          <div className="flex gap-1 text-sm items-center justify-center">
            <FaRegCalendarAlt className="text-bright-sun-400 w-4 h-4" />
            Sun, 25 August • <span className="text-mine-shaft-400">10:00 AM</span>
          </div>
        </>
      )}

      <Button
        onClick={() => navigate(`/jobs/${props.id}`)}
        className="cursor-pointer !h-8"
        fullWidth
        color="brightSun.4"
        variant="outline"
      >
        View Job
      </Button>
    </div>
  );
};

export default Card;