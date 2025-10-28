import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import React, { useState, useRef, useEffect } from "react";
import { FaRegBookmark, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { useNavigate, useParams } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { getProfile } from "../../Services/ProfileSevice";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotifiaction, successNotification } from "../../Services/NotificationService";
import { formatInterviewTime, openBase64PDF } from "../../Services/Utilities";

const TalentCard = (props) => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const ref = useRef(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [apl, { open: openApl, close: closeApl }] = useDisclosure(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (props.applicantId) {
      getProfile(props.applicantId)
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setProfile(props);
    }
  }, [props]);

  // handleOffer function here (unchanged)
  const handleOffer = (status) => {
    // ... your existing logic ...
  };

  return (
    <div
      className="bg-mine-shaft-900 p-4 rounded-xl shadow-md hover:shadow-[0_0_5px_1px_#ffbd20] 
        w-full max-w-md mx-auto sm:max-w-none sm:w-full
        flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex gap-3 items-center flex-1 min-w-0">
          <div className="p-2 bg-mine-shaft-800 rounded-full flex-shrink-0">
            <Avatar
              size="lg"
              src={
                profile?.picture
                  ? `data:image/jpeg;base64,${profile?.picture}`
                  : "/src/assets/avatar-9.png"
              }
              alt={profile.name || "avatar"}
            />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-lg truncate">{profile.name}</div>
            <div className="text-sm text-mine-shaft-300 truncate">
              {profile?.jobTitle} &#x2022; {profile?.company}
            </div>
          </div>
        </div>
        <FaRegHeart className="text-mine-shaft-300 cursor-pointer flex-shrink-0" />
      </div>

      {/* Skills with fixed height */}
      <div className="flex flex-wrap gap-2 min-h-[3rem] [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {profile?.skills?.slice(0, 4).map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
        {/* Fill gaps to keep height consistent */}
        {profile?.skills?.length < 4 &&
          Array(4 - (profile.skills?.length || 0))
            .fill(0)
            .map((_, idx) => (
              <div key={"empty" + idx} className="invisible py-1 px-2">
                placeholder
              </div>
            ))}
      </div>

      {/* About with fixed minHeight */}
      <div
        className="text-justify text-xs text-mine-shaft-300"
        style={{ minHeight: "4.5em" }}
      >
        <Text lineClamp={3}>{profile.about || " "}</Text>
      </div>

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

      {/* Interview or Experience Details */}
      {props.invited ? (
        <div className="flex gap-1 items-center text-mine-shaft-200 text-sm">
          <FaRegCalendarAlt />
          Interview: {formatInterviewTime(props.interviewTime)}
        </div>
      ) : (
        <div className="flex justify-between flex-wrap gap-3">
          <div className="text-mine-shaft-300 text-sm">
            Exp: {props.totalExp ?? "Fresher"}{" "}
            {props.totalExp > 1 ? "Years" : props.totalExp === 1 ? "Year" : ""}
          </div>
          <div className="flex gap-1 items-center text-mine-shaft-400 text-xs">
            <GrLocation className="h-4 w-4" />
            {profile?.location}
          </div>
        </div>
      )}

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

      {/* Buttons and Actions */}
      <div className="flex flex-wrap gap-2 [&>*]:flex-1 [&>*]:min-w-[140px]">
        {!props.invited && (
          <>
            <Button
              color="brightSun.4"
              onClick={() => navigate(`/talent-profile/${profile.id}`)}
              variant="outline"
              fullWidth
            >
              Profile
            </Button>

            {props.posted ? (
              <Button
                onClick={open}
                rightSection={<FaRegCalendarAlt className="w-5 h-5" />}
                color="brightSun.4"
                variant="light"
                fullWidth
              >
                Schedule
              </Button>
            ) : (
              <Button color="brightSun.4" variant="light" fullWidth>
                Message
              </Button>
            )}
          </>
        )}

        {props.invited && (
          <>
            <Button
              onClick={() => handleOffer("OFFERED")}
              color="brightSun.4"
              variant="outline"
              fullWidth
            >
              Accept
            </Button>
            <Button
              onClick={() => handleOffer("REJECTED")}
              color="brightSun.4"
              variant="light"
              fullWidth
            >
              Reject
            </Button>
          </>
        )}
      </div>

      {/* View Application button */}
      {(props.invited || props.posted) && (
        <Button
          onClick={openApl}
          color="brightSun.4"
          variant="filled"
          fullWidth
          autoContrast
          className="mt-3"
        >
          View Application
        </Button>
      )}

      {/* Modals... (unchanged) */}
    </div>
  );
};

export default TalentCard;
