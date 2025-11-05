import React from 'react'
import { formatDate } from '../../Services/Utilities'

const ExpCard = (props) => {
  return (
    <div className='flex flex-col gap-1 '>
   
         <div className='flex justify-between max-[500px]:flex-wrap gap-2 '>
                 <div className='flex gap-2 items-center '>
                   <div className='p-2 bg-mine-shaft-800 rounded-md shrink-0'><img className='h-7 max-[500px]:h-6' src={`/src/assets/Icons/${props.company}.png`}
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
   
   
               
   
         
       </div>
  )
}

export default ExpCard
