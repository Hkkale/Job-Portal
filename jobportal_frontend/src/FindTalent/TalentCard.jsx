import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import React, { useState, useRef } from "react";
import { FaRegBookmark, FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useNavigate } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";

const TalentCard = ({invited, posted, ...talent }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(Date.now())
  const ref=useRef(null);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="bg-mine-shaft-900 p-4 w-85 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={`./src/assets/${talent.image}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{talent.name}</div>
            <div className="text-sm text-mine-shaft-300 ">
              {talent.role} &#x2022; {talent.company}
            </div>
          </div>
        </div>
        <FaRegHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {talent.topSkills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>

      <Text
        className="!text-xs text-justify !text-mine-shaft-300 "
        lineClamp={3}
      >
        {talent.about}
      </Text>

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

       { invited ? <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
        <FaRegCalendarAlt />
          Interview: August 15, 2024 10:00 AM
       </div> : <div className="flex justify-between  ">
        <div className="font-semibold text-mine-shaft-200">
          {talent.expectedCtc}
        </div>
        <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
          
          <GrLocation className="h-4 w-4" />
          {talent.location}
        </div>
      </div>  }

      

      <Divider color="mineShaft.7" size="xs" orientation="horizontal" />

      <div className="flex [&>*]:!w-1/2 [&>*]:!p-1 gap-2.5 ">

      { !invited &&
        <>
        
        
        <Button
          color="brightSun.4"
          onClick={() => navigate("/talent-profile")}
          variant="outline"
          fullWidth
        >
          
          Profile
        </Button>

        {posted ? (
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
        invited && <>

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
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput label="Time" ref={ref} onClick={()=>ref.current?.showPicker()} />
          
          
          <Button color="brightSun.4" variant="light" fullWidth>
           
            Schedule
          </Button>

        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
