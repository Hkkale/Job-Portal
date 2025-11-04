import { ActionIcon } from '@mantine/core'
import React from 'react'
import { useState } from 'react'
import { FaRegSave, FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { GoPencil } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import ExpCard from './ExpCard'
import ExpInput from './ExpInput'
import { LiaTimesSolid } from "react-icons/lia";
import { useMediaQuery } from '@mantine/hooks'

const Experience = () => {
  const profile=useSelector((state)=>state.profile)
  
  
  const [edit,setEdit]=useState(false)
  const [addExp, setAddExp] = useState(false);
   const matches=useMediaQuery('(max-width: 500px)')



  const handleEdit =()=>{

    setEdit(!edit)
    

  }


   



  return (
   <div className="px-4">
           <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl">Experience <div className="flex gap-2">
             <ActionIcon size={matches?"md":"lg"} onClick={()=>setAddExp(true)}  color="brightSun.4" variant="subtle">
              <FaPlus className="h-4/5 w-4/5 " />
             </ActionIcon>
             <ActionIcon size={matches?"md":"lg"} onClick={()=>handleEdit()}  color={edit?"red.8":"brightSun.4"} variant="subtle">
               {edit? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
             </ActionIcon>
           </div>
           </div>
   
           <div className="flex flex-col gap-8">
             {profile?.experiences?.map((exp, index) => (
               <ExpCard key={index}   index={index} {...exp} edited={edit} />
             ))}
   
             {addExp && <ExpInput add  setEdit={setAddExp}/>}
   
   
           </div>
         </div>
  )
}

export default Experience
