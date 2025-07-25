import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MonthPickerInput } from "@mantine/dates";
import { useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";

const ExpInput = ({add,setEdit,...props}) => {
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

  const profile=useSelector((state)=>state.profile)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    if(!add){
      form.setValues({title:props.title, company:props.company, location:props.location, description:props.description, startDate:new Date(props.startDate), endDate:new Date(props.endDate), working:props.working })
      
    } 
  },[])

  const form= useForm({
    mode: 'controlled',
    validateInputOnChange:true,
    initialValues: {
      title: '',
      company:'',
      location:  '',
      description:  '',
      startDate: new Date(),
      endDate: new Date(),
      working:false
    },
    validate:{
      title:isNotEmpty("Title is required"),
      company:isNotEmpty("Company is required"),
      location:isNotEmpty("Location is required"),
      description:isNotEmpty("Description is required")

    }

  })

  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{add ? "Add":"Edit"} Experience</div>
      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <SelectInput form={form} name="title" {...fields[0]} />
        <SelectInput form={form} name="company" {...fields[1]} />
      </div>
      <SelectInput form={form} name="location" {...fields[2]} />
      <Textarea
        {...form.getInputProps('description')}
        label="Job Summary"
        placeholder="Enter summary..."
        autosize
        minRows={3}
        
        onChange={(e) => setDesc(e.currentTarget.value)}
      />

      <div className="flex gap-10 mb-5  [&>div]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps('startDate')}
          withAsterisk
          maxDate={endDate}
          label="Start Date"
          placeholder="Pick date"
          
          onChange={setStartDate}
        />
        <MonthPickerInput
          {...form.getInputProps('endDate')}
          disabled={checked}
          withAsterisk
          maxDate={startDate}
          label="End Date"
          placeholder="Pick date"
          
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        {...form.getInputProps('working')}
        
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
