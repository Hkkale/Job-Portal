import { ActionIcon, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { FaCheck, FaRegSave } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";

const About = () => {
  const [edit, setEdit] = useState(false);
  const profile=useSelector((state)=>state.profile)
  const [about,setAbout]=useState("")
  const dispatch=useDispatch()


  const handleEdit =()=>{

    if(!edit){
      setEdit(true);
      setAbout(profile.about)
      

    }
    else{
      setEdit(false)
      
    }



  }

  const handleSave = ()=>{
     setEdit(false)
          let updatedProfile ={...profile,about:about}
          dispatch(changeProfile(updatedProfile))
          successNotification("Sucess","About Updated Successfully")
    

  }
  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-5 flex justify-between ">
        About
         <div className='flex gap-1'>
        
        
                    {edit && <ActionIcon onClick={()=>handleSave()} size="lg" color="green.8" variant="subtle">
                     <FaCheck strokeWidth="2.5" className="h-4/5 w-4/5 " /> 
                  </ActionIcon>}
        
        
        
                    <ActionIcon onClick={()=>handleEdit()} size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle">
                    {edit ? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
                  </ActionIcon>
        
                  
                  </div>
      </div>

      {edit ? (
        <Textarea
          placeholder="Enter About Yourself..."
          autosize
          minRows={3}
          value={about}
          
          onChange={(e) => setAbout(e.currentTarget.value)}
        />
      ) : (
        <div className="text-sm text-mine-shaft-300 text-justify">
          {profile?.about}
        </div>
      )}
    </div>
  );
};

export default About;
