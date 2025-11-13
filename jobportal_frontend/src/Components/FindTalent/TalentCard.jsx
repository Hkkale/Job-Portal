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
import { formatInterviewDateTime2, formatInterviewTime, openBase64PDF } from "../../Services/Utilities";

const TalentCard = (props) => {
  const id=useParams().id;
  const navigate = useNavigate();
  const [date, setDate] = useState(null)
  const [time,setTime]=useState('')
  const ref=useRef(null);

  const [opened, { open, close }] = useDisclosure(false);
  const [apl, { open:openApl, close:closeApl }] = useDisclosure(false);
  const [profile, setProfile] = useState({})

  console.log("Balaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",props)

  const { formattedDate, formattedTime } = formatInterviewDateTime2(props.interviewTime);

console.log(formattedDate); // "Thu, 27 November •"
console.log(formattedTime); // "08:00 AM"


 

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

    let interview = {
    id,
    applicantId: profile?.id,
    applicationStatus: status,
    
  };

  if(status==="INTERVIEWING"){
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


  interview={...interview, interviewTime: formattedDateTime}
    
  }




 

  

  changeAppStatus(interview)
    .then((res) => {
     if(status==="INTERVIEWING")  successNotification("Interview Scheduled", "Interview Scheduled Successfully");
     else if(status==="OFFERED")  successNotification("Offered", "Job Offered Successfully");
     else if(status==="REJECTED")  successNotification("Rejected", "Application Rejected Successfully");




      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      errorNotifiaction("Error", err.response.data.message);
    });
};




  
  return  (
    <div className={!props.recTalent ?"bg-mine-shaft-900 p-4 max-[748px]:w-full max-[1112px]:w-[48%] max-[1476px]:w-[31%] w-85 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ":"bg-mine-shaft-900 p-4 min-[1170px]:w-full w-85 flex gap-3 flex-col rounded-xl max-[748px]:w-full max-[1097px]:w-[47%] hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400  "}>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}`:"/src/assets/avatar-9.png"} alt="" />
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

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs flex-wrap">
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
        <div className=" text-mine-shaft-300">
          Exp: {props.totalExp ? props.totalExp:"Fresher"} {props.totalExp>1 ? "Years":props.totalExp <1 && props.totalExp!==null ?"Year":" "}
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
            
            Scedule
          </Button>
        ) : (
          <Button href={`mailto:${profile?.email}`}            color="brightSun.4" component="a" variant="light" fullWidth>
            
            Message 
          </Button>
        )}
        </>

        

      }

      {
        props.invited && <>

        <div>
          <Button onClick={()=>handleOffer("OFFERED")} color="brightSun.4" variant="outline" fullWidth>
            
            Accept
          </Button>

        </div>


        <div>
          <Button onClick={()=>handleOffer("REJECTED")} color="brightSun.4" variant="light" fullWidth>
            
            Reject
          </Button>


        </div>
        
        
        </>
      }
      </div>

      {(props.invited || props.posted) &&  <Button onClick={openApl} color="brightSun.4" variant="filled" fullWidth autoContrast>
            
            View Application
          </Button>}

      

      <Modal
        title="Schedule Interview"
        centered
        opened={opened}
        onClose={close}
        radius="lg"
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


      <Modal
        title="Application"
        centered
        opened={apl}
        onClose={closeApl}
        radius="lg"
      >
        <div className="flex flex-col gap-4 ">


          <div>
            Email: &emsp; <a className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={`mailto:hitendrakale000@gmail.com`}>{props.email}</a>
          </div>

          <div>
            Website: &emsp; <a target="_blank" className="text-bright-sun-400 hover:underline cursor-pointer text-center" href={props.website}>{props.website}</a>
          </div>


          <div>
            Resume: &emsp; <span className="text-bright-sun-400 hover:underline cursor-pointer text-center" onClick={()=>openBase64PDF(props.resume)}>{props.name}</span>
          </div>

           <div>
            Cover Letter: &emsp; <div className="text-sm">{props.coverLetter}</div>
          </div>
          

        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;