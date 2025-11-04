import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { FaBriefcase, FaCheck } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { ActionIcon, NumberInput } from '@mantine/core'
import { FaRegSave } from 'react-icons/fa'
import { GoBriefcase, GoPencil } from 'react-icons/go'
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slices/ProfileSlice'
import { successNotification } from '../../Services/NotificationService'
import { LiaTimesSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import { useMediaQuery } from '@mantine/hooks'


const Info = () => {

   const matches=useMediaQuery('(max-width: 500px)')

  
  
    const fields=[
      {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'],  leftSection:GoBriefcase},
      {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], leftSection:GoBriefcase},
      {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], leftSection:GrLocation},
      {label:"Experience",placeholder:"Enter Total Experience", options:[0,1,2,3,4,5,6,7,8,9,10], leftSection:GrLocation}
  ]
  
  const profile=useSelector((state)=>state.profile)
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const [edit, setEdit] = useState(false);


  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '' ,totalExp:0},
    
  });

  const handleEdit =()=>{

    if(!edit){
      setEdit(true);
      form.setValues({jobTitle:profile.jobTitle, company:profile.company, location:profile.location,totalExp:profile.totalExp})

    }
    else{
      setEdit(false)
      
    }



  }

  const handleSave =()=>{

      setEdit(false)
      let updatedProfile ={...profile,...form.getValues()}
      dispatch(changeProfile(updatedProfile))
      successNotification("Sucess","Profile Updated Successfully")

  }
  
  return (
    <>

    <div className="text-3xl max-sm:text-2xl font-semibold flex justify-between  max-[350px]:text-xl">
          {user.name}


          <div className='flex gap-1'>


            {edit && <ActionIcon onClick={()=>handleSave()} size={matches?"md":"lg"} color="green.8" variant="subtle">
             <FaCheck strokeWidth="2.5" className="h-4/5 w-4/5  " /> 
          </ActionIcon>}



            <ActionIcon size={matches?"md":"lg"} onClick={()=>handleEdit()}  color={edit?"red.8":"brightSun.4"} variant="subtle">
            {edit ? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>

          
          </div>
          
        </div>


        {

          edit ?  <> <div className='flex max-[510px]:flex-wrap gap-10 mb-5 max-[510px]:[&>div]:w-full max-[510px]:gap-1  [&>div]:w-1/2  max-[510px]:mb-1'>

          <SelectInput form={form} name="jobTitle" {...fields[0]}/>
          <SelectInput form={form} name="company" {...fields[1]}/>
      
        </div>

        <div  className='flex max-[510px]:flex-wrap gap-10 mb-5 max-[510px]:[&>div]:w-full max-[510px]:gap-1  [&>div]:w-1/2'>

          <SelectInput form={form} name="location" {...fields[2]}/>

          <NumberInput name="totalExp" label="Total Experience" hideControls withAsterisk min={0} max={60} clampBehavior="strict" {...form.getInputProps('totalExp')}/>  


        </div>
          
          
          
          
          
          </>  :
          
          
          
          
          
          <><div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 ">
          <FaBriefcase className="h-4 w-4 shrink-0" /> {profile.jobTitle} &bull;{" "}
          {profile.company}{" "}
        </div>

        <div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 max-xs:mt-1">
          
          <GrLocation className="h-4 w-4 shrink-0" />
          {profile.location}
        </div>

        <div className="text-xl max-[377px]:text-sm flex gap-1  max-xs:text-lg max-[417px]:text-base items-center  text-mine-shaft-300 max-xs:mt-1">
          
          <FaUserTie className="h-4 w-4 shrink-0" />
         Experience: {profile.totalExp} Years
        </div>
        
        </>

        }
      
    </>
  )
}

export default Info
