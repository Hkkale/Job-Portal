import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talents from '../FindTalent/Talents'

const FindTalentPage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins] w-screen  border-white box-border overflow-x-hidden'>

      
      <SearchBar/>
      <Divider mx="md" size="xs" orientation="horizontal" />
      <Talents/>
    

      
   
    
    

    </div>
  )
}

export default FindTalentPage
