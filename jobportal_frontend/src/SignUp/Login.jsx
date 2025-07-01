import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import React from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();
  return (
     <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
          <div className='text-2xl font-semibold '>Login</div>
    
    
          
    
          <TextInput withAsterisk label="Email" placeholder='Enter Email' leftSection={<MdOutlineMailOutline className='text-bright-sun-400' />  }/>
    
          <PasswordInput withAsterisk label="Password" placeholder='Enter Password' leftSection={<RiLockPasswordLine className='text-bright-sun-400' />  }/>
          
    
          
    
          <Button variant='filled' autoContrast>Login</Button>
    
          <div className='mx-auto '>Don't have an account?<span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>navigate("/signup")}> Sign Up</span></div>
    
          
        </div>
  )
}

export default Login
