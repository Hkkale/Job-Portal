import { ActionIcon } from "@mantine/core";
import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const CompanyCard = (comapany) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-3">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center  cursor-pointer"
        >
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`./src/assets/Icons/${comapany.name}.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold">{comapany.name}</div>
            <div className="text-xs text-mine-shaft-300 ">
              {comapany.employees} Employees
            </div>
          </div>
        </div>
        <ActionIcon
          color="brightSun.4"
          variant="subtle"
          size="xs"
          
        >
          <FaExternalLinkAlt className="text-bright-sun-400 h-5 w-5" />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;
