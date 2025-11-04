import { Button } from '@mantine/core'
import React, { useState } from 'react'
import ExpInput from './ExpInput'
import { formatDate } from '../../Services/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../../Slices/ProfileSlice'
import { successNotification } from '../../Services/NotificationService'
import { useMediaQuery } from '@mantine/hooks'

const ExpCard = (props) => {
  

  const [edit, setEdit]= useState(false)
  const matches=useMediaQuery('(max-width: 500px)')
  
  const profile= useSelector((state)=>state.profile)
  const dispatch= useDispatch()

  const handleDelete = () =>{

    let exp= [...profile.experiences]
    exp.splice(props.index,1);
    let updatedProfile = {...profile, experiences:exp}
    dispatch(changeProfile(updatedProfile))
    successNotification("Success","Experience deleted successfully")

  }


  return !edit ? (
     <div className='flex flex-col gap-1 '>

      <div className='flex justify-between max-[500px]:flex-wrap gap-2 '>
              <div className='flex gap-2 items-center '>
                <div className='p-2 bg-mine-shaft-800 rounded-md shrink-0'><img className='h-7 max-[500px]:h-6' src={`./src/assets/Icons/${props.company}.png`}
                onError={(e)=>e.target.src="/src/assets/letter-j.png"} 
                
                alt="" /></div>
                <div>
                  <div className='font-semibold max-[350px]:text-sm'>{props.title}</div>
                  <div className='text-sm text-mine-shaft-300 max-[350px]:text-xs'>{props.company} &bull; {props.location}</div>
                </div>
              </div>
              <div className='text-sm text-mine-shaft-300 max-[350px]:text-xs  '>

                {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}


              </div>
            </div>


            <div className='text-sm text-mine-shaft-300 text-justify max-[350px]:text-xs'>{props.description}</div>


            {props.edited && (<div className='flex gap-5 mt-3'>
              <Button size={matches?"sm":"md"} onClick={()=>setEdit(true)} color='brightSun.4'  variant='outline'>Edit</Button>
              <Button size={matches?"sm":"md"} onClick={()=>handleDelete()} color='red.8' variant='light'>Delete</Button>
            </div>)}

      
    </div>
   
  ):<ExpInput {...props} setEdit={setEdit}/>
}

export default ExpCard
