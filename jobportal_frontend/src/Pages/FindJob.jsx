import React from "react";
import SearchBar from "../Components/FindJobs/SearchBar";
import { Divider } from "@mantine/core";
import Jobs from "../Components/FindJobs/Jobs";

const FindJob = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden">
      <SearchBar />
      <Divider mx="md" size="xs" orientation="horizontal" />
      <Jobs />
    </div>
  );
};

export default FindJob;
