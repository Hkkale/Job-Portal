import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = ({add,setEdit}) => {
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{add ? "Add":"Edit"} Experience</div>
      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <SelectInput {...fields[0]} />
        <SelectInput {...fields[1]} />
      </div>
      <SelectInput {...fields[2]} />
      <Textarea
        label="Job Summary"
        placeholder="Enter summary..."
        autosize
        minRows={3}
        value={desc}
        onChange={(e) => setDesc(e.currentTarget.value)}
      />

      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate}
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput
          disabled={checked}
          withAsterisk
          maxDate={startDate}
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Currently working here"
      />

      <div className="flex gap-5 mt-3">
        <Button
          onClick={ ()=>setEdit(false)}
          color="brightSun.4"
          variant="outline"
        >
          Save
        </Button>
        <Button onClick={ ()=>setEdit(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
