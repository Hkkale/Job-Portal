import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MantineProvider } from '@mantine/core';
import { Slider } from '@mantine/core';


function App() {
  

  return (
    <MantineProvider>
      
       <Slider
      color="red"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </MantineProvider>
  )
}

export default App
