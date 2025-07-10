import React, { useState } from 'react'
import {Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput} from '@mantine/core'
import { MdOutlineMailOutline } from "react-icons/md";
import { BiText } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
import { RiLockStarLine } from "react-icons/ri";
import {registerUser} from "../Services/UserService"

const SignUp = () => {

  const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    acconutType:"APPLICANT"

  }


  const [data,setData]= useState(form)


  const handleChange = (event) =>{

    if(typeof(event)=="string") setData({...data,acconutType:event});
    else  setData({...data,[event.target.name]:event.target.value})

    
   



  }


  const handleSubmit =()=>{
    console.log(data)
    registerUser(data)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }



  const navigate = useNavigate();
  const [value,setValue]=useState('react')
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold '>Create Account</div>


      <TextInput name='name' onChange={handleChange} value={data.name} withAsterisk label="Full Name" placeholder='Enter Name' leftSection={<BiText className='text-bright-sun-400' />  }/>

      <TextInput name='email' onChange={handleChange} value={data.email} withAsterisk label="Email" placeholder='Enter Email' leftSection={<MdOutlineMailOutline className='text-bright-sun-400' />  }/>

      <PasswordInput name='password' onChange={handleChange} value={data.password} withAsterisk label="Password" placeholder='Enter Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>
      <PasswordInput name='confirmPassword' onChange={handleChange} value={data.confirmPassword} withAsterisk label="Confirm Password" placeholder='Confirm Password' leftSection={<RiLockStarLine className='text-bright-sun-400' />  }/>



      <Radio.Group
      value={data.acconutType}
      onChange={handleChange}
      
      label="You are?"
      
      withAsterisk
    >
      <Group mt="xs">
      <Radio className='py-4 px-6 border  border-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 ' autoContrast value="APPLICANT" label="Applicant" />
      <Radio className='py-4 px-6 border border-mine-shaft-800 rounded-lg has-[:checked]:border-bright-sun-400   has-[:checked]:bg-bright-sun-400/5' autoContrast value="EMPLOYER" label="Employer" />
      
      </Group>
    </Radio.Group>











      <Checkbox autoContrast label={<>I accept{' '}<Anchor> terms & conditions</Anchor></>}/>

      <Button onClick={handleSubmit} variant='filled' autoContrast>Sign up</Button>

      <div className='mx-auto '>Already an account?<span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>navigate("/login")}> Login</span></div>

      
    </div>
  )
}

export default SignUp
