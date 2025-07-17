import { Button } from "@mantine/core";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Company from "../Components/CompanyProfile/Company";
import SimilarComp from "../Components/CompanyProfile/SimilarComp";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden">
      <Button
        className="m-4"
        leftSection={<FaArrowLeftLong size={20} />}
        color="brightSun.4"
        onClick={() => navigate("/jobs")}
        variant="light"
      >
        {" "}
        Back{" "}
      </Button>

      <div className="flex px-8 gap-15">
        <Company />
        <SimilarComp />
      </div>
    </div>
  );
};

export default CompanyPage;
