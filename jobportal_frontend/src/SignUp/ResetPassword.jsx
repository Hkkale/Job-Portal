import { Button, Modal, PinInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'

import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { sendOtp } from '../Services/UserService'

const ResetPassword = (props) => {
  const [email, setEmail]= useState("");
  const [otpSent,setOtpSent]=useState(false)
  const [otpSending,setOtpSending]=useState(false)


  const handleSendOtp = ()=>{
    setOtpSending(true);
    sendOtp(email).then((res)=>{
      console.log(res)
      setOtpSent(true);
      setOtpSending(false)
    }).catch((err)=>{
      console.log(err)
      etOtpSending(false)
    })



  }


  const handleVerifyOTP = (otp) =>{
    console.log(otp)

  }


  return (
   <Modal opened={props.opened} onClose={props.close} title="Reset Password">

    <div className='flex flex-col gap-6'>
      <TextInput
              
              value={email}
              name="email"
              size='md'
              onChange={(e)=>{setEmail(e.target.value)}}
              withAsterisk
              label="Email"
              placeholder="Enter Email"
              leftSection={<MdOutlineMailOutline className="text-bright-sun-400" />}
              rightSection={<Button loading={otpSending} size="xs" autoContrast className="mr-1" disabled={email==="" || otpSent} onClick={handleSendOtp}>Send OTP</Button>}
              rightSectionWidth="xl"
            />

    {otpSent && <PinInput onComplete={handleVerifyOTP} length={6} size="md" gap="lg" className='mx-auto' type="number"/>}
      
            {/* <PasswordInput
              error={formError.password}
              value={data.password}
              name="password"
              onChange={handleChange}
              withAsterisk
              label="Password"
              placeholder="Enter Password"
              leftSection={<RiLockPasswordLine className="text-bright-sun-400" />}
            /> */}


    {otpSent && <div>

      <Button loading={otpSending} autoContrast className="mr-1" disabled={email==="" || otpSent} onClick={handleSendOtp}>Send OTP</Button>

      <Button loading={otpSending} size="xs" autoContrast className="mr-1" disabled={email==="" || otpSent} onClick={handleSendOtp}>Send OTP</Button>

      
      
      </div>}



    </div>

   </Modal>
  )
}

export default ResetPassword
