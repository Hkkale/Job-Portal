import { Button } from '@mantine/core'
import React, { useState } from 'react'
import ExpInput from './ExpInput'

const ExpCard = ({edited,...exp}) => {

  const [edit, setEdit]= useState(false)

  return !edit ? (
     <div className='flex flex-col gap-1'>

      <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <div className='p-2 bg-mine-shaft-800 rounded-md'><img className='h-7' src={`./src/assets/Icons/${exp.company}.png`} alt="" /></div>
                <div>
                  <div className='font-semibold'>{exp.title}</div>
                  <div className='text-sm text-mine-shaft-300 '>{exp.company} &bull; {exp.location}</div>
                </div>
              </div>
              <div className='text-sm text-mine-shaft-300'>

                {exp.startDate} - {exp.endDate}


              </div>
            </div>


            <div className='text-sm text-mine-shaft-300 text-justify'>{exp.description}</div>


            {edited && (<div className='flex gap-5 mt-3'>
              <Button onClick={()=>setEdit(true)} color='brightSun.4' variant='outline'>Edit</Button>
              <Button color='red.8' variant='light'>Delete</Button>
            </div>)}

      
    </div>
   
  ):<ExpInput setEdit={setEdit}/>
}

export default ExpCard
