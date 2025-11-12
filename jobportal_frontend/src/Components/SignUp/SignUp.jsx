import React, { useState } from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiText } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { RiLockStarLine } from "react-icons/ri";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { FaCheck, FaX } from "react-icons/fa6";
import {
  errorNotifiaction,
  successNotification,
} from "../../Services/NotificationService";

const SignUp = () => {
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
  };

  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [check, setCheck]=useState(false);

  const handleChange = (event) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(signupValidation(name, value));

    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) {
        err = "Passwords should be match";
      }

      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }

    if (name === "confirmPassword") {
      if (data.password !== value) {
        setFormError({ ...formError, [name]: "Passwords should be match" });
      } else {
        setFormError({ ...formError, confirmPassword: "" });
      }
    }
  };

  const handleSubmit = () => {
  let valid = true;
  let newFormError = {};

  for (let key in data) {
    if (key === "accountType") continue;

    if (key !== "confirmPassword")
      newFormError[key] = signupValidation(key, data[key]);
    else if (data[key] !== data["password"])
      newFormError[key] = "Passwords should be match.";

    if (newFormError[key]) valid = false;
  }

  setFormError(newFormError);

  if(valid==true){

    if(!check){
      errorNotifiaction("Registration Failed!","Please accept terms and condition.")
      return

    } 

    
  }

  if (valid === true) {
    setLoading(true);

    registerUser(data)
      .then((res) => {
        console.log(res);
        setData(form);
        setCheck(false)
        successNotification(
          "Registered Successfully!",
          "Redirecting to login page..."
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        errorNotifiaction(
          "Registration Failed!",
          err.response?.data?.errorMessage || "Something went wrong"
        );
      });
  }
};


  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2 max-[708px]:translate-x-full "
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3  max-[1000px]:px-10 max-[788px]:px-5 max-[708px]:w-full max-[708px]:pt-15 ">
        <div className="text-2xl font-semibold ">Create Account</div>


        <div className="flex flex-col gap-1.5 h-9/10">
          <TextInput
          error={formError.name}
          name="name"
          onChange={handleChange}
          value={data.name}
          withAsterisk
          label="Full Name"
          placeholder="Enter Name"
          leftSection={<BiText className="text-bright-sun-400" />}
        />

        <TextInput
          error={formError.email}
          name="email"
          onChange={handleChange}
          value={data.email}
          withAsterisk
          label="Email"
          placeholder="Enter Email"
          leftSection={<MdOutlineMailOutline className="text-bright-sun-400" />}
        />

        <PasswordInput
          error={formError.password}
          name="password"
          onChange={handleChange}
          value={data.password}
          withAsterisk
          label="Password"
          placeholder="Enter Password"
          leftSection={<RiLockPasswordLine className="text-bright-sun-400" />}
        />
        <PasswordInput
          error={formError.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          value={data.confirmPassword}
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm Password"
          leftSection={<RiLockStarLine className="text-bright-sun-400" />}
        />

        <Radio.Group
          value={data.accountType}
          onChange={handleChange}
          label="You are?"
          withAsterisk
        >
          <div className="flex gap-5 max-[708px]:gap-2">
            <Radio
            
            autoContrast
              className="py-4 px-6 max-[708px]:px-4 max-[708px]:py-2.5 border  border-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400"
              
              value="APPLICANT"
              label="Applicant"
            />
            <Radio
            autoContrast
              className="py-4 px-6 max-[708px]:px-4 max-[708px]:py-2.5 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400   has-[:checked]:bg-bright-sun-400/5"
              
              value="EMPLOYER"
              label="Employer"
            />
          </div>
        </Radio.Group>

        <Checkbox
          autoContrast
          checked={check}
          onChange={(e)=>setCheck(e.currentTarget.checked)}
          className=" max-[708px]:[&_label]:text-sm max-[310px]:[&_label]:text-xs "
          
          label={
            <div className="max-[708px]:text-sm max-[310px]:text-xs ">
              I accept <a className="text-bright-sun-400"> terms & conditions</a>
            </div>
          }
        />

        <Button
          loading={loading}
          onClick={handleSubmit}
          variant="filled"
          className="shrink-0"
          autoContrast
        >
          Sign up
        </Button>

        <div className="mx-auto max-[708px]:text-sm max-[310px]:text-xs ">
          Already an account?
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/login");
              setData(form);
              setFormError(form);
            }}
          >
            {" "}
            Login
          </span>
        </div>
        </div>

        
      </div>
    </>
  );
};

export default SignUp;
