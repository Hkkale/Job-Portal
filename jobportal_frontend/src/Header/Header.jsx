import React from 'react'
import { IoBag } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar , Indicator} from '@mantine/core';
import Navlinks from './Navlinks';
const Header = () => {
  return (
    <div className='w-full h-20 text-white flex justify-between px-6 items-center bg-mine-shaft-950 font-[poppins] '>


      <div className='flex gap-2  h-full items-center  text-bright-sun-400 '>
        <IoBag className='text-4xl pb-1' color='text-bright-sun-400' />
        <div className='text-3xl font-semibold'>Jobify</div>
      </div>


      <Navlinks/>


      <div className='flex gap-4 items-center h-full '>
        
        <div className='flex items-center gap-2'>
          
          
          <div>Hiten</div>
          <Avatar src="./src/assets/avatar-9.png" alt="it's me" radius='xl' size={34}/>
        </div>
        <div className='bg-mine-shaft-900 p-2 rounded-full'> <IoSettingsOutline color='white' size={20}/></div>
        <div className='bg-mine-shaft-900 p-2 rounded-full'>
          <Indicator color="brightSun.4" size={7} offset={3}>
          <FaRegBell color='white' size={20}/>
          </Indicator>
          
          </div>
       
        
      </div>
      
    </div>
  )
}

export default Header

