import React from 'react'
import Home from "./Pages/Home"
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from './Pages/Signup'
import CreatePassword from './Pages/CreatePassword'
import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
import Passwords from './Pages/Passwords'
import Menubar from './Components/Menubar'

const App = () => {
  const location = useLocation()
  const hidemenu = location.pathname === `/create` || location.pathname === `/Signup`;
  if(!hidemenu){
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
        <Route path='/create' element={<CreatePassword/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Passwords' element={<Passwords/>}/>
      </Routes>
      {!hidemenu && <Menubar/>}
    </div>
    </>
  )
}

export default App