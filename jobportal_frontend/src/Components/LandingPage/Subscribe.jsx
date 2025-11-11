import { Button, TextInput } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react'
import {errorNotifiaction, successNotification} from '../../Services/NotificationService'



const Subscribe = () => {
  const matches=useMediaQuery('(max-width: 511px)')
  const [value, setValue]=useState("");
  const handleSubscribe = ()=>{
    if(value=="") {
      errorNotifiaction("Subscription Failed!","Enter Email ID")
      return

    }
    if (!value.includes("@")) {
      errorNotifiaction("Invalid Email!", "Please enter a valid email address.");
      
        return;
    }
    successNotification("Subscribed Successfully!","You will notified about new oppurtunities.")
    setValue("")
  }
  return (
    <div className="mt-20 mb-10 flex items-center bg-mine-shaft-900 mx-20 max-[1085px]:mx-5 max-[828px]:px-2 py-3 rounded-xl justify-around max-[828px]:flex-col max-[828px]:gap-4">
      <div className="text-4xl max-[1003px]:text-3xl max-[828px]:text-2xl max-[491px]:text-xl max-[343px]:text-lg w-2/5 max-[828px]:w-4/5 font-semibold text-mine-shaft-100 text-center  ">
        Never Wants to Miss Any{" "}
        <span className="text-bright-sun-400">Job News ? </span>
      </div>

      <div className='flex gap-4 bg-mine-shaft-700 px-3 py-2 max-[828px]:py-1 items-center max-[828px]:justify-between rounded-xl max-[828px]:w-4/5  max-[510px]:w-full'>
        <TextInput
        className='[&_input]:!text-mine-shaft-100 font-semibold max-[828px]:[&_input]:text-sm!   '
          variant="unstyled"          
          placeholder="Your@email.com"
          size="xl"
          value={value}
          onChange={(e)=>setValue(e.currentTarget.value)}
        />
        <Button onClick={(e)=>handleSubscribe()} size={matches?"sm":"lg"} className='!rounded-lg'  color='brightSun.4' variant="filled">Subscribe</Button>
      </div>
    </div>
  );
}

export default Subscribe
