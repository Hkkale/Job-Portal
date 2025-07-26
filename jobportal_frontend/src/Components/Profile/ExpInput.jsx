import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from '../../Slices/ProfileSlice'
import { successNotification } from '../../Services/NotificationService'

const ExpInput = ({ add, setEdit, ...props }) => {
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
  const dispatch=useDispatch();

  useEffect(() => {
    if (!add) {
      form.setValues({
        title: props.title,
        company: props.company,
        location: props.location,
        description: props.description,
        startDate: new Date(props.startDate),
        endDate: new Date(props.endDate),
        working: props.working,
      });
    }
  }, []);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  const handleSave = () => {
  form.validate();

  if (!form.isValid()) return;

  const values = form.getValues();

  // Ensure startDate and endDate are Date objects
  const startDate = new Date(values.startDate);
  const endDate = new Date(values.endDate);

  let exp = [...profile.experiences];

  const newExp = {
    ...values,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };

  if (add) {
    exp.push(newExp);
  } else {
    exp[props.index] = newExp;
  }

  const updatedProfile = {
    ...profile,
    experiences: exp,
  };

  setEdit(false);
  dispatch(changeProfile(updatedProfile));
  successNotification("Success", `Experience ${add ? "Added" : "Updated"} Successfully`);
};
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <SelectInput form={form} name="title" {...fields[0]} />
        <SelectInput form={form} name="company" {...fields[1]} />
      </div>
      <SelectInput form={form} name="location" {...fields[2]} />
      <Textarea
        {...form.getInputProps("description")}
        label="Job Summary"
        placeholder="Enter summary..."
        autosize
        minRows={3}
        
      />

      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps("startDate")}
          withAsterisk
          maxDate={form.getValues().endDate}
          label="Start Date"
          placeholder="Pick date"
        />
        <MonthPickerInput
          {...form.getInputProps("endDate")}
          disabled={form.getValues().working}
          withAsterisk
          minDate={form.getValues().startDate}
          maxDate={new Date()}
          label="End Date"
          placeholder="Pick date"
        />
      </div>
      <Checkbox
        checked={form.getValues().working}
        onChange={(e) => form.setFieldValue("working", e.currentTarget.checked)}
        autoContrast
        label="Currently working here"
      />

      <div className="flex gap-5 mt-3">
        <Button
          onClick={() => handleSave()}
          color="green.8"
          variant="light"
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

export default ExpInput;
