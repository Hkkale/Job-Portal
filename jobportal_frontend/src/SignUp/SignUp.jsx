import React from 'react'
import {Anchor, Button, Checkbox, PasswordInput, TextInput} from '@mantine/core'
import { MdOutlineMailOutline } from "react-icons/md";
import { BiText } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold '>Create Account</div>


      <TextInput withAsterisk label="Full Name" placeholder='Enter Name' leftSection={<BiText className='text-bright-sun-400' />  }/>

      <TextInput withAsterisk label="Email" placeholder='Enter Email' leftSection={<MdOutlineMailOutline className='text-bright-sun-400' />  }/>

      <PasswordInput withAsterisk label="Password" placeholder='Enter Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>
      <PasswordInput withAsterisk label="Confirf Password" placeholder='Confirm Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>

      <Checkbox autoContrast label={<>I accept{' '}<Anchor> terms & conditions</Anchor></>}/>

      <Button variant='filled' autoContrast>Sign up</Button>

      <div className='mx-auto '>Already an account?<span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>navigate("/login")}> Login</span></div>

      
    </div>
  )
}

export default SignUp
