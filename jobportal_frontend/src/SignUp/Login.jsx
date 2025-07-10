import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { loginUser } from '../Services/UserService'

const Login = () => {
  const form={
   
    email:"",
    password:"",
    

  }
  const navigate = useNavigate();


   const [data,setData]= useState(form)


  const handleChange = (event) =>{

   setData({...data,[event.target.name]:event.target.value})

    
   



  }


  const handleSubmit =()=>{
    console.log(data)
    loginUser(data)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.response.data))
  }
  return (
     <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
          <div className='text-2xl font-semibold '>Login</div>
    
    
          
    
          <TextInput value={data.email} name='email' onChange={handleChange} withAsterisk label="Email" placeholder='Enter Email' leftSection={<MdOutlineMailOutline className='text-bright-sun-400' />  }/>
    
          <PasswordInput alue={data.password} name='password' onChange={handleChange} withAsterisk label="Password" placeholder='Enter Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>
          
    
          
    
          <Button onClick={handleSubmit} variant='filled' autoContrast>Login</Button>
    
          <div className='mx-auto '>Don't have an account?<span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>navigate("/signup")}> Sign Up</span></div>
    
          
        </div>
  )
}

export default Login
