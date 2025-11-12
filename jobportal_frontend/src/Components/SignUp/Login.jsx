import {
  Button,
  Checkbox,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router";

import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { FaCheck, FaX } from "react-icons/fa6";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import {
  errorNotifiaction,
  successNotification,
} from "../../Services/NotificationService";

import { setUser } from "../../Slices/UserSlice";
import { setJwt } from "../../Slices/JwtSlice";
import { loginUser } from "../../Services/AuthService";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const form = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange = (event) => {
    setFormError({ ...formError, [event.target.name]: "" });
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
      setLoading(true);
      loginUser(data)
        .then((res) => {
          console.log(res);
          successNotification(
            "Login Successfull!",
            "Redirecting to Home page..."
          );

          setTimeout(() => {
            setLoading(false);
            // dispatch(setUser(res));
             dispatch(setJwt(res.jwt));
             const decoded=jwtDecode(res.jwt);
             console.log(decoded);
             dispatch(setUser({...decoded,email:decoded.sub}));

            navigate("/");
          }, 5000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data);
          errorNotifiaction("Login Failed!", 
            "Bad Credentials. Please try again."
          );
        });
    }
  };
  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3 max-[1000px]:px-10 max-[788px]:px-5 max-[708px]:w-full">
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

        <Button
          loading={loading}
          onClick={handleSubmit}
          variant="filled"
          autoContrast
        >
          Login
        </Button>

        <div className="mx-auto max-[310px]:text-sm max-[275px]:text-xs text-center ">
          Don't have an account?
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setData(form);
              setFormError(form);
            }}
          >
            {" "}
            Sign Up
          </span>
        </div>

        <div
          onClick={open}
          className="text-bright-sun-400 hover:underline cursor-pointer text-center max-[310px]:text-sm max-[275px]:text-xs "
        >
          Forget Password
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
