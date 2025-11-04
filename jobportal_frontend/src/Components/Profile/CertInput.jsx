import { Button, TextInput } from "@mantine/core";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { useMediaQuery } from "@mantine/hooks";

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

  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
   const matches=useMediaQuery('(max-width: 500px)')

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      issuer: "",

      issueDate: new Date(),

      certificateId: "",
    },
    validate: {
      title: isNotEmpty("Title is required"),
      issuer: isNotEmpty("issuer is required"),
      issueDate: isNotEmpty("Issue Date is required"),
      certificateId: isNotEmpty("Certificate ID is required"),
    },
  });

  const handleSave = () => {
    form.validate();

    if (!form.isValid()) return;

    const values = form.getValues();

    // Ensure issueDate is a valid Date
    const issueDate = new Date(values.issueDate);

    let certi = [...profile.certifications];

    certi.push({
      ...values,
      issueDate: issueDate.toISOString(),
    });

    const updatedProfile = {
      ...profile,
      certifications: certi,
    };

    setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification(
      "Success",
      `Certificate Added Successfully`
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>

      <div className="flex gap-10 max-[510px]:gap-2 mb-5 max-[510px]:mb-0 max-[510px]:flex-wrap max-[510px]:[&>div]:w-full  [&>div]:w-1/2">
        <TextInput
          {...form.getInputProps("title")}
          withAsterisk
          label="Title"
          placeholder="Enter title"
        />
        <SelectInput form={form} name="issuer" {...fields[1]} />
      </div>

      <div className="flex gap-10 max-[510px]:gap-2 mb-5 max-[510px]:mb-0 max-[510px]:flex-wrap max-[510px]:[&>div]:w-full [&>div]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps("issueDate")}
          withAsterisk
          maxDate={new Date()}
          label="Issued Date"
          placeholder="Pick date"
        />

        <TextInput
          {...form.getInputProps("certificateId")}
          withAsterisk
          label="Certificate ID"
          placeholder="Enter ID"
        />
      </div>

      <div className="flex gap-5 mt-3">
        <Button size={matches?"sm":"md"} onClick={() => handleSave()} color="green.8" variant="light">
          Save
        </Button>
        <Button size={matches?"sm":"md"} onClick={() => setEdit(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertInput;
