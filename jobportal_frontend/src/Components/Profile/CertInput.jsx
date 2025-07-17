import { Button, TextInput } from "@mantine/core";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MonthPickerInput } from "@mantine/dates";

const CertInput = ({ setEdit }) => {
  const fields = [
    {
      label: "Job Title",
      placeholder: "Enter Job Title",
      options: [
        "Designer",
        "Developer",
        "Product Manager",
        "Marketing Specialist",
        "Data Analyst",
        "Sales Executive",
        "Content Writer",
        "Customer Support",
      ],
      value: "Software Engineer",
      leftSection: GoBriefcase,
    },
    {
      label: "Company",
      placeholder: "Enter Company Name",
      options: [
        "Google",
        "Microsoft",
        "Meta",
        "Netflix",
        "Adobe",
        "Facebook",
        "Amazon",
        "Apple",
        "Spotify",
      ],
      value: "Google",
      leftSection: GoBriefcase,
    },
    {
      label: "Location",
      placeholder: "Enter Job Location",
      options: [
        "Delhi",
        "New York",
        "San Francisco",
        "London",
        "Berlin",
        "Tokyo",
        "Sydney",
        "Toronto",
      ],
      value: "New York, United States",
      leftSection: GrLocation,
    },
  ];

  const [issueDate, setIssueDate]= useState(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>

      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <TextInput withAsterisk label="Title" placeholder="Enter title" />
        <SelectInput {...fields[1]} />
      </div>

      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <MonthPickerInput
        withAsterisk
        maxDate={new Date()}
        label="Issued Date"
        placeholder="Pick date"
        value={issueDate}
        onChange={setIssueDate}
      />

      <TextInput withAsterisk label="Certificate ID" placeholder="Enter ID" />
      </div>

      

      

      <div className="flex gap-5 mt-3">
        <Button
          onClick={() => setEdit(false)}
          color="brightSun.4"
          variant="outline"
        >
          Save
        </Button>
        <Button onClick={() => setEdit(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertInput;
