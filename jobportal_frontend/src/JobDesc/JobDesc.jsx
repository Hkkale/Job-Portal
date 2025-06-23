import { ActionIcon, Button, Divider } from "@mantine/core";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { BiBoltCircle } from "react-icons/bi";
import DOMPurify from "dompurify";
const JobDesc = () => {
  const card = [
    { name: "Location", icon: MdOutlineLocationOn, value: "New York" },
    { name: "Experience", icon: HiOutlineBriefcase, value: "Expert" },
    { name: "Salary", icon: RiMoneyRupeeCircleLine, value: "48 LPA" },
    { name: "Job Type", icon: BiBoltCircle, value: "Full Time" },
  ];

  const desc =
    "<h4>About The Job</h4><p>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p><h4>Responsibilities</h4><ul><li>Design, build, test, and deploy software applications and features</li><li>Carry software products through the software development life cycle (SDLC)</li><li>Write clean, concise, and efficient code</li><li>Manage code documentation and version control</li><li>Troubleshoot and debug software</li><li>Participate in on-call rotation to respond to production issues</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>3+ years of professional experience working on this field</li><li>Bachelor's degree in computer science, software engineering, or related field</li><li>Proficiency in at least one programming language (e.g., Java, C#, C++)</li><li>Back-end development expertise</li><li>Strong problem-solving and communication skills</li><li>Experience with build tools such as Gradle and Maven</li><li>Good working knowledge of the Linux operating system</li></ul>";

  const data = DOMPurify.sanitize(desc);

  const skills = [
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "Express",
    "Django",
    "PostgreSQL",
  ];
  return (
    <div className="w-2/3">
      <div className="flex justify-between  ">
        <div
          onClick={() => navigate("/jobs")}
          className="flex gap-2 items-center  cursor-pointer"
        >
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src={`./src/assets/Icons/Google.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">Software Engineer III</div>
            <div className="text-lg text-mine-shaft-300 ">
              Google &#x2022; 3 days ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Button
            onClick={() => navigate("/apply-job")}
            size="sm"
            color="brightSun.4"
            variant="light"
          >
            Apply
          </Button>
          <FaRegBookmark className="text-bright-sun-400 cursor-pointer" />
        </div>
      </div>

      <Divider my="xl" />

      <div className="flex  justify-between">
        {card.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              color="brightSun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className=" font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">Required Skills</div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <ActionIcon
              p="xs"
              key={index}
              color="brightSun.4"
              className="!h-fit !w-fit !text-sm !font-medium"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-mine-shaft-200 [&_p]:text-justify "
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 ">About Company</div>

        <div>
          <div className="flex justify-between  ">
            <div
              onClick={() => navigate("/jobs")}
              className="flex gap-2 items-center  cursor-pointer"
            >
              <div className="p-3 bg-mine-shaft-800 rounded-xl">
                <img
                  className="h-8"
                  src={`./src/assets/Icons/Google.png`}
                  alt=""
                />
              </div>
              <div>
                <div className="font-medium text-lg">
                  Google
                </div>
                <div className="text-lg text-mine-shaft-300 ">10K+ Employees
                </div>
              </div>
            </div>
            
              <Button
                onClick={() => navigate("/")}
                
                color="brightSun.4"
                variant="light"
              >
                Company Page
              </Button>
              
            
          </div>

          <div className="text-mine-shaft-300 text-justify pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe ducimus, odit dolores sunt placeat delectus sint sapiente est eveniet ad quas, maxime aut vel obcaecati sed molestias eaque pariatur aspernatur! Praesentium voluptatibus rerum distinctio officiis? Nemo, necessitatibus cupiditate. Voluptatibus!</div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
