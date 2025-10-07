import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { timeAgo } from '../../Services/Utilities';

const PostedJobCard = (props) => {

  const id=useParams().id;
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/posted-jobs/${props.id}`)} className={`rounded-xl p-2 border-l-2 border-l-bright-sun-400 hover:cursor-pointer ${props.id==id?"bg-bright-sun-400 text-black":"bg-mine-shaft-900 text-mine-shaft-300"}`}>


      <div className='text-sm font-semibold'>{props.jobTitle}</div>
      <div className='text-xs font-medium'>{props.location}</div>
      <div className='text-xs'>{props.jobStatus=="DRAFT"?"Drafted":props.jobStatus=="CLOSED"?"Closed":"Posted"} {timeAgo(props.postTime)}</div>     
    </div>
  )
}

export default PostedJobCard
