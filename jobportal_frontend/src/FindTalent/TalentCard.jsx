import { Avatar, Button, Divider, Text } from '@mantine/core'
import React from 'react'
import { FaRegBookmark, FaRegClock } from 'react-icons/fa6'
import { FaRegHeart } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useNavigate } from 'react-router';


const TalentCard = (talent) => {
  const navigate = useNavigate();
  return (
    <div className='bg-mine-shaft-900 p-4 w-85 flex gap-3 flex-col rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 '>
   
         <div className='flex justify-between'>
           <div className='flex gap-2 items-center'>
             <div className='p-2 bg-mine-shaft-800 rounded-full'><Avatar  size="lg" src={`./src/assets/${talent.image}.png`} alt="" /></div>
             <div>
               <div className='font-semibold text-lg'>{talent.name}</div>
               <div className='text-sm text-mine-shaft-300 '>{talent.role} &#x2022; {talent.company}</div>
             </div>
           </div>
           <FaRegHeart className='text-mine-shaft-300 cursor-pointer'/>
         </div>
   
   
   
   
   
         <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs'>

          {talent.topSkills.map((skill,index)=><div key={index}>{skill}</div>)}
   
           
   
   
   
         </div>
   
   
         <Text className='!text-xs text-justify !text-mine-shaft-300 ' lineClamp={3}>{talent.about}
          </Text>
   
   
         <Divider color='mineShaft.7' size="xs" orientation="horizontal" />
   
   
   
   
   
   
         <div className='flex justify-between  '>
           <div className='font-semibold text-mine-shaft-200'>{talent.expectedCtc}</div>
           <div className='flex gap-1 text-xs items-center text-mine-shaft-400'> <GrLocation className='h-4 w-4'/>{talent.location}</div>
         </div>


         <Divider color='mineShaft.7' size="xs" orientation="horizontal" />
         

         <div className='flex [&>*]:!w-1/2 [&>*]:!p-1 gap-2.5 '>

          <Button  color='brightSun.4' onClick={()=>navigate("/talent-profile")} variant='outline' fullWidth> Profile </Button>

          
          <Button color='brightSun.4' variant='light' fullWidth> Messgae </Button>

          


         </div>
   
   
   
         
         
       </div>
  )
}

export default TalentCard
