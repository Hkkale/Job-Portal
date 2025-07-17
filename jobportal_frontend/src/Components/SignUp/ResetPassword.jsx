import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";

import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ChangePassword, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import {
  errorNotifiaction,
  successNotification,
} from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [resendLoader, setResendLoader] = useState(false);

  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.start();
    } else setSeconds((s) => s - 1);
  }, 1000);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        successNotification(
          "OTP send successfully",
          "Enter OTP to reset password"
        );
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
      })
      .catch((err) => {
        console.log(err);

        setOtpSending(false);
        errorNotifiaction(
          "OTP Sending Failed!",
          err.response.data.errorMessage
        );
      });
  };

  const handleVerifyOTP = (otp) => {
    console.log(otp);
    verifyOtp(email, otp)
      .then((res) => {
        console.log(res);
        successNotification("Otp Verified.", "Enter new password.");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotifiaction(
          "Otp Verification Failed",
          err.response.data.errorMessage
        );
      });
  };

  const resendOtp = () => {
    if (resendLoader) return;
    handleSendOtp();
  };

  const changeEmail = () => {
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    setEmail("");
    interval.stop();
  };

  const handleResetPassword = () => {
    if (passError.length === 0) {
      ChangePassword(email, password)
        .then((res) => {
          console.log(res);

          successNotification(
            "Password Changed Successfully.",
            "Redirecting to login page."
          );
          setTimeout(() => {
            props.close();
            setEmail("");
            setPassword("");
            setOtpSent(false);
            setVerified(false);
          }, [1000]);
        })
        .catch((err) => {
          console.log(err);
          errorNotifiaction(
            "Password Reset Failed.",
            "Redirecting to login page."
          );
        });
    } else {
      errorNotifiaction("Password Reset Failed.", "Password is invalid!.");
    }
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          value={email}
          name="email"
          size="md"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          withAsterisk
          label="Email"
          placeholder="Enter Email"
          leftSection={<MdOutlineMailOutline className="text-bright-sun-400" />}
          rightSection={
            <Button
              loading={otpSending && !otpSent}
              size="xs"
              autoContrast
              className="mr-1"
              disabled={email === "" || otpSent}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          }
          rightSectionWidth="xl"
        />

        {otpSent && (
          <PinInput
            onComplete={handleVerifyOTP}
            length={6}
            size="md"
            gap="lg"
            className="mx-auto"
            type="number"
          />
        )}

        {otpSent && !verified && (
          <div className="flex gap-2">
            <Button
              fullWidth
              color="brightSun.4"
              loading={otpSending}
              autoContrast
              className="mr-1"
              variant="light"
              onClick={resendOtp}
            >
              {resendLoader ? `Resend OTP in : ${seconds}s` : "Resend"}
            </Button>

            <Button
              fullWidth
              autoContrast
              className="mr-1"
              variant="filled"
              onClick={changeEmail}
            >
              Change Email
            </Button>
          </div>
        )}

        {verified && (
          <PasswordInput
            value={password}
            error={passError}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPassError(signupValidation("password", e.target.value));
            }}
            withAsterisk
            label="Password"
            placeholder="Enter Password"
            leftSection={<RiLockPasswordLine className="text-bright-sun-400" />}
          />
        )}

        {verified && (
          <Button onClick={handleResetPassword} autoContrast variant="filled">
            {" "}
            Change Password{" "}
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
