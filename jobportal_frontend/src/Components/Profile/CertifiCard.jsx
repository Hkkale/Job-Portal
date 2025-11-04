import { ActionIcon } from "@mantine/core";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { formatDate } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useMediaQuery } from "@mantine/hooks";

const CertifiCard = ({edit,index,...certi}) => {
  const matches=useMediaQuery('(max-width: 500px)')

  const profile= useSelector((state)=>state.profile)
  const dispatch= useDispatch()

  const handleDelete = () =>{

    let certi= [...profile.certifications]
    certi.splice(index,1);
    let updatedProfile = {...profile, certifications:certi}
    dispatch(changeProfile(updatedProfile))
    successNotification("Success","Certificate deleted successfully")

  }
  return (
    <div className="flex justify-between max-[500px]:flex-wrap gap-2 b">
      <div className="flex gap-2  items-center  w-[65%] ">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-7 max-[500px]:h-6"
            src={`./src/assets/Icons/${certi.issuer}.png`}
            onError={(e)=>e.target.src="/src/assets/letter-j.png"} 
            alt=""
          />
        </div>
        <div>
          <div className="font-semibold max-[350px]:text-sm">{certi.title}</div>
          <div className="text-sm text-mine-shaft-300  max-[350px]:text-xs">{certi.issuer} </div>
        </div>
      </div>


      <div className="flex items-center gap-2  max-[450px]:justify-center">
      <div className="flex flex-col items-end  max-[500px]:flex-row max-[500px]:gap-2  ">
        <div className="text-sm max-[350px]:text-xs  text-mine-shaft-300">Issued  {formatDate(certi.issueDate)}</div>
        <div className="text-sm text-mine-shaft-300 max-[350px]:text-xs   ">
          ID: {certi.certificateId}
        </div>
      </div>

     {edit &&  <ActionIcon size={matches?"md":"lg"}   color="red.8" variant="subtle">
            <FaRegTrashAlt onClick={()=>handleDelete()} className="h-4/5 w-4/5  " />
          </ActionIcon>}




      </div>




    </div>
  );
};

export default CertifiCard;
