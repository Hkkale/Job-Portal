import React, { useState } from 'react'
import SelectInput from './SelectInput'
import { FaBriefcase, FaCheck } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { ActionIcon } from '@mantine/core'
import { FaRegSave } from 'react-icons/fa'
import { GoBriefcase, GoPencil } from 'react-icons/go'
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slices/ProfileSlice'
import { successNotification } from '../../Services/NotificationService'
import { LiaTimesSolid } from "react-icons/lia";

const Info = () => {

  
  
    const fields=[
      {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'],  leftSection:GoBriefcase},
      {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], leftSection:GoBriefcase},
      {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], leftSection:GrLocation}
  ]
  
  const profile=useSelector((state)=>state.profile)
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const [edit, setEdit] = useState(false);


  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '' },
    
  });

  const handleEdit =()=>{

    if(!edit){
      setEdit(true);
      form.setValues({jobTitle:profile.jobTitle, company:profile.company, location:profile.location})

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

    <div className="text-3xl font-semibold flex justify-between">
          {user.name}


          <div className='flex gap-1'>


            {edit && <ActionIcon onClick={()=>handleSave()} size="lg" color="green.8" variant="subtle">
             <FaCheck strokeWidth="2.5" className="h-4/5 w-4/5 " /> 
          </ActionIcon>}



            <ActionIcon onClick={()=>handleEdit()} size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle">
            {edit ? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>

          
          </div>
          
        </div>


        {

          edit ?  <> <div className='flex gap-10 mb-5  [&>div]:w-1/2'>

          <SelectInput form={form} name="jobTitle" {...fields[0]}/>
          <SelectInput form={form} name="company" {...fields[1]}/>
      
        </div>
          <SelectInput form={form} name="location" {...fields[2]}/>   </>  :<><div className="text-xl flex gap-1 items-center ">
          <FaBriefcase className="h-4 w-4" /> {profile.jobTitle} &bull;{" "}
          {profile.company}{" "}
        </div>

        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          {" "}
          <GrLocation className="h-4 w-4" />
          {profile.location}
        </div></>

        }
      
    </>
  )
}

export default Info
