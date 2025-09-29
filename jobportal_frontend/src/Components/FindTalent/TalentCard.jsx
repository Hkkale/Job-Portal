import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import React, { useState, useRef, useEffect } from "react";
import { FaRegBookmark, FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useNavigate, useParams } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { getProfile } from "../../Services/ProfileSevice";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotifiaction, successNotification } from "../../Services/NotificationService";
import { formatInterviewTime } from "../../Services/Utilities";

const TalentCard = (props ) => {
  const id=useParams().id;
  const navigate = useNavigate();
  const [date, setDate] = useState(null)
  const [time,setTime]=useState('')
  const ref=useRef(null);

  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState({})

  useEffect(()=>{

    if(props.applicantId){
      getProfile(props.applicantId)
      .then((res)=>{
        setProfile(res)
        
      })
      .catch((err)=>{
        console.log(err)
       })
    }
    else{
      setProfile(props)
    }


  },[props])

  const handleOffer = (status) => {
  if (!date || !time) {
    errorNotifiaction("Error", "Please select both date and time");
    return;
  }

  // Combine date & time
  const interviewDateTime = new Date(date);
  const [hours, minutes] = time.split(":");
  interviewDateTime.setHours(hours);
  interviewDateTime.setMinutes(minutes);

  // Format to ISO string (backend expects LocalDateTime format)
  const formattedDateTime = interviewDateTime.toISOString().slice(0, 19); 
  // → "2025-09-30T10:30:00"

  let interview = {
    id,
    applicantId: profile?.id,
    applicationStatus: status,
    interviewTime: formattedDateTime
  };

  changeAppStatus(interview)
    .then((res) => {
      successNotification("Success", "Interview Scheduled Successfully");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      errorNotifiaction("Error", err.response.data.message);
    });
};


  
  return (
    <div className="bg-mine-shaft-900 p-4 w-85 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}`:"./src/assets/avatar-9.png"} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{profile.name}</div>
            <div className="text-sm text-mine-shaft-300 ">
              {profile?.jobTitle} &#x2022; {profile?.company}
            </div>
          </div>
        </div>
        <FaRegHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {profile?.skills?.map((skill, index) => index < 4 && (
          <div key={index}>{skill}</div>
        ))}
      </div>

      <Text
        className="!text-xs text-justify !text-mine-shaft-300 "
        lineClamp={3}
      >
        {profile.about}
      </Text>

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

       { props.invited ? <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
        <FaRegCalendarAlt />
          Interview: {formatInterviewTime(props.interviewTime)}
       </div> : <div className="flex justify-between  ">
        <div className="font-semibold text-mine-shaft-200">
          23 LPA
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          
          <GrLocation className="h-4 w-4" />
          {profile?.location}
        </div>
      </div>  }

      

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

      <div className="flex [&>*]:!w-1/2 [&>*]:!p-1 gap-2.5 ">

      { !props.invited &&
        <>
        
        
        <Button
          color="brightSun.4"
          onClick={() => navigate("/talent-profile")}
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
            
            Scedule
          </Button>
        ) : (
          <Button color="brightSun.4" variant="light" fullWidth>
            
            Messgae
          </Button>
        )}
        </>

        

      }

      {
        props.invited && <>

        <div>
          <Button color="brightSun.4" variant="outline" fullWidth>
            
            Accept
          </Button>

        </div>


        <div>
          <Button color="brightSun.4" variant="light" fullWidth>
            
            Reject
          </Button>


        </div>
        
        
        </>
      }
      </div>

      <Modal
        title="Schedule Interview"
        centered
        opened={opened}
        onClose={close}
      >
        <div className="flex flex-col gap-4 ">
          <DateInput
            minDate={new Date()}
            value={date}
            onChange={setDate}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput value={time} onChange={(event)=>setTime(event.currentTarget.value)} label="Time" ref={ref} onClick={()=>ref.current?.showPicker()} />
          
          
          <Button onClick={()=>handleOffer("INTERVIEWING")} color="brightSun.4" variant="light" fullWidth>
           
            Schedule
          </Button>

        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
