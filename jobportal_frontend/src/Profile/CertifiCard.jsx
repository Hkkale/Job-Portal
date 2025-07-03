import { ActionIcon } from "@mantine/core";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const CertifiCard = ({edit,...certi}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-7"
            src={`./src/assets/Icons/${certi.issuer}.png`}
            alt=""
          />
        </div>
        <div>
          <div className="font-semibold">{certi.name}</div>
          <div className="text-sm text-mine-shaft-300 ">{certi.issuer} </div>
        </div>
      </div>


      <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">{certi.issueDate}</div>
        <div className="text-sm text-mine-shaft-300">
          ID: {certi.certificateId}
        </div>
      </div>

     {edit &&  <ActionIcon  color="red.8" variant="subtle">
            <FaRegTrashAlt className="h-4/5 w-4/5 " />
          </ActionIcon>}




      </div>




    </div>
  );
};

export default CertifiCard;
