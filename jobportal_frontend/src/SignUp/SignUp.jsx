import React, { useState } from 'react'
import {Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput} from '@mantine/core'
import { MdOutlineMailOutline } from "react-icons/md";
import { BiText } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router';
import { RiLockStarLine } from "react-icons/ri";
import {registerUser} from "../Services/UserService"
import { signupValidation } from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';
import { FaCheck, FaX } from 'react-icons/fa6';

const SignUp = () => {

  const form={
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    acconutType:"APPLICANT"

  }

  


  const [data,setData]= useState(form)
  const [formError , setFormError] = useState(form)
  const navigate = useNavigate();
  

  const handleChange = (event) =>{

    if(typeof(event)=="string"){ setData({...data,acconutType:event});
    return
    }
    let name=event.target.name
    let value = event.target.value
    setData({...data,[name]:value})
    console.log(signupValidation(name,value))

    setFormError({...formError,[name]:signupValidation(name,value)})

    if(name==="password" && data.confirmPassword!==""){
      let err=""
      if(data.confirmPassword!==value){
       err="Passwords should be match"
      }
      
      setFormError({...formError,[name]:signupValidation(name,value),confirmPassword:err})
    }

    if(name==="confirmPassword"){
      if(data.password!==value){
        setFormError({...formError,[name]:"Passwords should be match"})
      }
      else{
        setFormError({...formError,confirmPassword:""})

      }
    }



    
   



  }


  const handleSubmit =()=>{
    let valid= true
    let newFormError={}
    for(let key in data){
      if(key==="accountType") continue;

      if(key!=="confirmPassword") newFormError[key]=signupValidation(key, data[key])
      
      else if(data[key]!==data["password"])  newFormError[key]=="Passwords should be match."

      if(newFormError[key]) valid= false;

      
      
      
      setFormError(newFormError)
      
      
      
      
      
    }
  if(valid===true){ 

    
        
    registerUser(data)
    .then((res)=>{
      console.log(res)
      setData(form)
       notifications.show({
          title: 'Registered Successfully!',
          message: 'Redirecting to login page...',
          withCloseButton:true,
          icon:<FaCheck className='w-[85%] h-[85%]'/>,
          color:'teal',
          withBorder:true,
          className:'!border-green-500'
        })

        setTimeout(()=>{
          navigate("/login")
        },4000)
      
    })
    .catch((err)=>{
      
      console.log(err)
      notifications.show({
          title: 'Registration Failed!',
          message: err.response.data.errorMessage,
          withCloseButton:true,
          icon:<FaX className='w-[85%] h-[85%] p-0.5'/>,
          color:'red',
          withBorder:true,
          className:'!border-red-500'
        })

        

      
    
    })

  }
    console.log(data)
  }



  
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold '>Create Account</div>


      <TextInput error={formError.name} name='name' onChange={handleChange} value={data.name} withAsterisk label="Full Name" placeholder='Enter Name' leftSection={<BiText className='text-bright-sun-400' />  }/>

      <TextInput error={formError.email} name='email' onChange={handleChange} value={data.email} withAsterisk label="Email" placeholder='Enter Email' leftSection={<MdOutlineMailOutline className='text-bright-sun-400' />  }/>

      <PasswordInput error={formError.password} name='password' onChange={handleChange} value={data.password} withAsterisk label="Password" placeholder='Enter Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>
      <PasswordInput error={formError.confirmPassword} name='confirmPassword' onChange={handleChange} value={data.confirmPassword} withAsterisk label="Confirm Password" placeholder='Confirm Password' leftSection={<RiLockStarLine className='text-bright-sun-400' />  }/>



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

      <div className='mx-auto '>Already an account?<span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>{
        navigate("/login")
        setData(form)
        setFormError(form)}}> Login</span></div>

      
    </div>
  )
}

export default SignUp
