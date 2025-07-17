import { Divider } from "@mantine/core";
import React from "react";
import SearchBar from "../Components/FindTalent/SearchBar";
import Talents from "../Components/FindTalent/Talents";

const FindTalentPage = () => {
  return (
    <div className=" min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden">
      <SearchBar />
      <Divider mx="md" size="xs" orientation="horizontal" />
      <Talents />
    </div>
  );
};

export default FindTalentPage;
