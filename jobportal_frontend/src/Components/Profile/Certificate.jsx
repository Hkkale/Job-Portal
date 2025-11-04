import { ActionIcon } from '@mantine/core'
import React, { useState } from 'react'
import { FaRegSave } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { GoPencil } from 'react-icons/go'
import CertifiCard from './CertifiCard'
import CertInput from './CertInput'
import { useDispatch, useSelector } from 'react-redux'
import { LiaTimesSolid } from 'react-icons/lia'
import { useMediaQuery } from '@mantine/hooks'

const Certificate = () => {
  const [edit,setEdit]= useState(false)
  const profile=useSelector((state)=>state.profile)
  const dispatch=useDispatch()
  const [addCerti, setAddCerti] = useState(false);


  const handleEdit=()=>{
    setEdit(!edit)

  }

   const matches=useMediaQuery('(max-width: 500px)')


  return (
     <div className="px-4">
        <div className="text-2xl font-semibold mb-5 flex justify-between max-[350px]:text-xl">Certifications <div className="flex gap-2">
          <ActionIcon size={matches?"md":"lg"} onClick={()=>setAddCerti(true)}  color="brightSun.4" variant="subtle">
           <FaPlus className="h-4/5 w-4/5 " />
          </ActionIcon>
          <ActionIcon size={matches?"md":"lg"} onClick={()=>handleEdit()}  color={edit ?"red.8":"brightSun.4"} variant="subtle">
            {edit? <LiaTimesSolid strokeWidth="2.5" className="h-4/5 w-4/5 " />   :<GoPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div>
        </div>

        <div className="flex flex-col gap-8 max-[350px]:gap-8">
          {profile?.certifications?.map((certi, index) => (
            <CertifiCard key={index} index={index} edit={edit} {...certi} />
          ))}
          {addCerti && <CertInput  setEdit={setAddCerti}/>}
        </div>
      </div>
  )
}

export default Certificate
