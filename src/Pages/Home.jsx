import React from 'react'
import Menubar from "../Components/Menubar"
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import Path from '../Components/Path'
import Smartdata from '../Components/Smartdata'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Path/>
      <Smartdata/>
      <Menubar/>
    </div>
  )
}

export default Home