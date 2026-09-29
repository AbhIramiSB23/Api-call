import { useState } from 'react'
import './App.css'
import Home  from "./Home";
import { Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  )
}

export default App
