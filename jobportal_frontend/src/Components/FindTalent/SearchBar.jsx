import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { SiGooglesearchconsole } from "react-icons/si";
import { Button, Collapse, Divider, Input, RangeSlider } from "@mantine/core";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { LuFilter } from "react-icons/lu";

const SearchBar = () => {
  const matches = useMediaQuery("(max-width: 640px)");
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState([0, 50]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (name, event) => {
    if (name === "experience") {
      dispatch(updateFilter({ exp: event }));
    } else {
      setName(event.target.value);
      dispatch(updateFilter({ name: event.target.value }));
    }
  };

  const searchFields = [
    {
      title: "Job Title",
      icon: IoSearch,
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
    },
    {
      title: "Location",
      icon: GrLocation,
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
    },
    {
      title: "Skills",
      icon: SiGooglesearchconsole,
      options: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Node.js",
        "Python",
        "Java",
        "Ruby",
        "PHP",
        "SQL",
        "MongoDB",
        "PostgreSQL",
        "Git",
        "API Development",
        "Testing and Debugging",
        "Agile Methodologies",
        "DevOps",
        "AWS",
        "Azure",
        "Google Cloud",
      ],
    },
  ];

  return (
    <div>
      {/* Filters button on small screens */}
      {matches && (
        <div className="flex justify-end mb-3 px-2">
          <Button
            leftSection={<LuFilter className="text-xl" />}
            onClick={toggle}
            variant="outline"
            radius="md"
            autoContrast
            color="brightSun.4"
          >
            Filters
          </Button>
        </div>
      )}

      <Collapse in={opened || !matches}>
        <div
          className="
            flex flex-wrap gap-y-6 gap-x-2 px-2 py-6
            lg:flex-nowrap lg:gap-x-3 lg:px-5 lg:py-8
            items-stretch
          "
        >
          {/* Talent Name input */}
          <div className="flex items-center w-full sm:w-[48%] md:w-[21.5%] lg:w-1/5">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
              <FaRegUserCircle size={20} />
            </div>
            <Input
              className="[&_input]:!placeholder-mine-shaft-200"
              variant="unstyled"
              placeholder="Talent Name"
              value={name}
              onChange={(e) => handleChange("name", e)}
              fullWidth
            />
          </div>

          <Divider
            className="hidden md:flex h-auto items-center"
            orientation="vertical"
            size="xs"
            mr="xs"
          />

          {/* MultiInput fields */}
          {searchFields.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className="w-full sm:w-[48%] md:w-[21.5%] lg:w-1/5">
                <MultiInput {...item} />
              </div>
              
                <Divider
                  className="hidden md:flex h-auto items-center"
                  orientation="vertical"
                  size="xs"
                  mr="xs"
                />
              
            </React.Fragment>
          ))}

          {/* Experience RangeSlider */}
          <div className="w-full sm:w-[48%] md:w-[47%] lg:w-1/5 [&_.mantine-Slider-label]:!translate-y-10.5">
            <div className="flex justify-between text-sm mb-2">
              <div>Experience (Year)</div>
              <div>
                {value[0]} - {value[1]}
              </div>
            </div>
            <RangeSlider
              onChangeEnd={(e) => handleChange("experience", e)}
              size="xs"
              color="brightSun.4"
              labelTransitionProps={{
                transition: "skew-down",
                duration: 150,
                timingFunction: "linear",
              }}
              minRange={1}
              max={50}
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SearchBar;