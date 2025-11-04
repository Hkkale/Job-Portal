import { ActionIcon, TagsInput } from '@mantine/core';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6';
import { GoPencil } from 'react-icons/go';
import { LiaTimesSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';
import { successNotification } from '../../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';

const Skills = () => {
    const [edit, setEdit] = useState(false);
    const profile=useSelector((state)=>state.profile)
    const [skills,setSkills]=useState([])
    const dispatch=useDispatch()
     const matches=useMediaQuery('(max-width: 500px)')
  
  
    const handleEdit =()=>{
  
      if(!edit){
        setEdit(true);
        setSkills(profile.skills)
        
  
      }
      else{
        setEdit(false)
        
      }
  
  
  
    }
  
    const handleSave = ()=>{
       setEdit(false)
            let updatedProfile ={...profile,skills:skills}
            dispatch(changeProfile(updatedProfile))
            successNotification("Sucess","Skills Updated Successfully")
      
  
    }
  return (
    <div className="px-4">
            <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl flex-wrap ">Skills
              <div className='flex gap-1'>
              
              
                          {edit && <ActionIcon onClick={()=>handleSave()} size={matches?"md":"lg"}color="green.8" variant="subtle">
                           <FaCheck strokeWidth="2.5" className="h-4/5 w-4/5 " /> 
                        </ActionIcon>}
              
              
              
                          <ActionIcon size={matches?"md":"lg"} onClick={()=>handleEdit()}  color={edit?"red.8":"brightSun.4"} variant="subtle">
                          {edit ? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
                        </ActionIcon>
              
                        
                        </div>
            </div>
    
            {edit ? <TagsInput value={skills} onChange={setSkills}  placeholder="Add skills" splitChars={[',', ' ','|']}/>:<div className="flex flex-wrap gap-2">
              {profile?.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-bright-sun-300/15 text-sm font-medium bg-opacity-50 rounded-3xl text-bright-sun-400 px-3 py-1 max-[350px]:text-xs"
                >
                  {skill}
                </div>
              ))}
            </div>}
    
    
            
          </div>
  )
}

export default Skills
