import { Button } from '@mantine/core'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'


import PostedJob from '../Components/PostedJob/PostedJob'
import PostedJobDesc from '../Components/PostedJob/PostedJobDesc'

const PostedJobPage = () => {
  return (
    <div className=' min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden'>
    
          
    
          


          
          
    
    
         <div className='flex px-4 gap-15 mb-10'>

          <PostedJob/>
          <PostedJobDesc/>
            
         </div>
        
        
    
        </div>
  )
}

export default PostedJobPage
