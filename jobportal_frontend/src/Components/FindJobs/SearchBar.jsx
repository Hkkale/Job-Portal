import React, { useState } from "react";
import MultiInput from "./MultiInput";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";
import { SiGooglesearchconsole } from "react-icons/si";
import { Button, Collapse, Divider, RangeSlider } from "@mantine/core";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { LuFilter } from "react-icons/lu";

const dropdownData = [
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
    title: "Experience",
    icon: HiOutlineBriefcase,
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: SiGooglesearchconsole,
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
];

const SearchBar = () => {
  const matches=useMediaQuery('(max-width: 640px)');
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState([0, 300]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter({ salary: event }));
  };

  return (
    <div>
      <div className="flex justify-end">
        {
          matches && <Button leftSection={<LuFilter className="text-xl"/>}  onClick={toggle} variant="outline" m="sm" radius="md" autoContrast color="brightSun.4">Filters</Button>
        }
        
        </div>
      
      <Collapse in={(opened || !matches)}>
        <div
          className="
        flex flex-wrap gap-y-6 gap-x-2 px-2 py-6
        lg:flex-nowrap lg:gap-x-3 lg:px-5 lg:py-8
        items-stretch
      "
        >
          {dropdownData.map((item, index) => (
            <React.Fragment key={item.title}>
              <div
                className="
              w-full
              sm:w-[48%]
              md:w-[23%]
              lg:w-1/5
              mb-0
            "
              >
                <MultiInput {...item} />
              </div>
              {index !== dropdownData.length - 1 && (
                <div
                  className="
                hidden
                md:flex
                items-center
                h-auto
              "
                >
                  <Divider orientation="vertical" size="xs" />
                </div>
              )}
            </React.Fragment>
          ))}
          <div
            className="
          w-full
          sm:w-[48%]
          md:w-[23%]
          lg:w-1/5
          [&_.mantine-Slider-label]:!translate-y-10.5
        "
          >
            <div className="flex justify-between text-sm mb-2">
              <div>Salary</div>
              <div>
                &#8377; {value[0]} LPA - &#8377; {value[1]} LPA
              </div>
            </div>
            <RangeSlider
              onChangeEnd={handleChange}
              size="xs"
              color="brightSun.4"
              labelTransitionProps={{
                transition: "skew-down",
                duration: 150,
                timingFunction: "linear",
              }}
              minRange={1}
              max={300}
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
