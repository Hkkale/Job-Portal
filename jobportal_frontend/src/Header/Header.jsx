import React from 'react'
import { IoBag } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar } from '@mantine/core';
const Header = () => {
  return (
    <div className='w-full  h-28 text-white flex justify-between px-6 items-center bg-mine-shaft-950'>


      <div className='flex gap-3 items-center'>
        <IoBag className='text-4xl' color='white' />
        <div className='text-3xl font-semibold'>Jobify</div>
      </div>



      <div className='flex gap-3'>
        <a href="">Find job</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">Find Job</a>
        <a href="">About Us</a>
      </div>


      <div className='flex gap-4 items-center'>
        <FaRegBell color='white'/>
        <div className='flex items-center gap-2'>
          
          
          <div>Hiten</div>
          <Avatar src="./src/assets/profile.jpg" alt="it's me" />
        </div>
        <IoSettingsOutline color='white'/>
      </div>
      
    </div>
  )
}

export default Header

