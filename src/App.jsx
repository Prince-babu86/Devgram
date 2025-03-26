import React from 'react'
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
 
    <div className="Routes">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App