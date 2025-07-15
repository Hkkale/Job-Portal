import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { loginUser } from "../Services/UserService";
import { loginValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { FaCheck, FaX } from "react-icons/fa6";

const Login = () => {
  const form = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);

  const handleChange = (event) => {
    setFormError({...formError,[event.target.name]:""})
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true;
    let newFormError = {};
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);

      if (newFormError[key]) valid = false;

      setFormError(newFormError);
      
    }
    
    console.log(data);
      

      if (valid) {
        loginUser(data)
          .then((res) => {
            console.log(res);
            notifications.show({
              title: "Login Successfull!",
              message: "Redirecting to Home page...",
              withCloseButton: true,
              icon: <FaCheck className="w-[85%] h-[85%]" />,
              color: "teal",
              withBorder: true,
              className: "!border-green-500",
            });

            setTimeout(() => {
              navigate("/");
            }, 4000);
          })
          .catch((err) => {
            console.log(err.response.data);
            notifications.show({
              title: "Login Failed!",
              message: err.response.data.errorMessage,
              withCloseButton: true,
              icon: <FaX className="w-[85%] h-[85%] p-0.5" />,
              color: "red",
              withBorder: true,
              className: "!border-red-500",
            });
          });
      }
    
  };
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold ">Login</div>

      <TextInput
        error={formError.email}
        value={data.email}
        name="email"
        onChange={handleChange}
        withAsterisk
        label="Email"
        placeholder="Enter Email"
        leftSection={<MdOutlineMailOutline className="text-bright-sun-400" />}
      />

      <PasswordInput
        error={formError.password}
        value={data.password}
        name="password"
        onChange={handleChange}
        withAsterisk
        label="Password"
        placeholder="Enter Password"
        leftSection={<RiLockPasswordLine className="text-bright-sun-400" />}
      />

      <Button onClick={handleSubmit} variant="filled" autoContrast>
        Login
      </Button>

      <div className="mx-auto ">
        Don't have an account?
        <span
          className="text-bright-sun-400 hover:underline cursor-pointer"
          onClick={() =>{ 
            navigate("/signup")
            setData(form)
            setFormError(form)
          }

          }
        >
          {" "}
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
