import React from 'react'
import Home from "./Pages/Home"
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from './Pages/Signup'
import CreatePost from './Pages/CreatePost'
import Photos from './Pages/Photos'
import Menubar from './Components/Menubar'

const App = () => {
  const location = useLocation()
  const hidemenu = location.pathname === "/Signup";
  if(hidemenu){
    console.log("yes")
  }else{
    console.log("no")
  }
  return (
    <>

    <div className="Routes">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/photos' element={<Photos/>}/>
      </Routes>
      {!hidemenu && <Menubar/>}
    </div>
    </>
  )
}

export default App