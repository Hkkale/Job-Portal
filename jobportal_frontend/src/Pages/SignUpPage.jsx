import React from "react";
import { IoBag } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/SignUp/Login";
import { Button } from "@mantine/core";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border relative overflow-hidden">
      <Button
        className="m-4 !absolute z-10"
        leftSection={<FaArrowLeftLong size={20} />}
        color="brightSun.4"
        onClick={() => navigate("/")}
        variant="light"
      >
        Home{" "}
      </Button>
      <div
        className={`w-full transition-all ease-in-out duration-1000 min-h-screen h-screen   flex [&>*]:shrink-0 ${
          location.pathname === "/signup" ? "-translate-x-1/2 max-[708px]:-translate-x-full  " : "translate-x-0"
        } `}
      >
        <Login />
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 transition-all duration-1000 ease-in-out max-[708px]:hidden ${
            location.pathname == "/signup"
              ? "rounded-r-[250px]"
              : "rounded-l-[250px]"
          } flex  justify-center  flex-col gap-4 items-center`}
        >
          <div
            onClick={() => navigate("/")}
            className="flex gap-2 cursor-pointer  items-center  text-bright-sun-400 "
          >
            <IoBag className="max-[1000px]:text-5xl max-[788px]:text-4xl  text-6xl pb-1" color="text-bright-sun-400 " />
            <div className="text-6xl font-semibold max-[1000px]:text-5xl max-[788px]:text-4xl  ">Jobify</div>
          </div>

          <div className="text-2xl max-[1000px]:text-xl max-[788px]:text-lg  text-mine-shaft-200 font-semibold">
            Find the Job made for you
          </div>
        </div>

        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
