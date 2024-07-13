import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Forground from './components/Forground'

function App() {
  
  return (
    <div className=" bg-zinc-800 w-full h-screen">
      <Background/>
      <Forground/>
    </div>
  )
}

export default App
