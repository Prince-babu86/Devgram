import React from 'react'
import Menubar from "../Components/Menubar"
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import Path from '../Components/Path'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Path/>
      <Menubar/>
    </div>
  )
}

export default Home