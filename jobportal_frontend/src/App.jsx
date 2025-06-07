import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MantineProvider } from '@mantine/core';
import { Slider } from '@mantine/core';
import HomePage from './Pages/HomePage';


function App() {
  

  return (
    <MantineProvider>
      
       <HomePage/>
    </MantineProvider>
  )
}

export default App
