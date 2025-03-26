import React from 'react'
import Menubar from "../Components/Menubar"
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import Path from '../Components/Path'
import Smartdata from '../Components/Smartdata'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Path/>
      <Smartdata/>
      <Banner/>
      <Menubar/>
    </div>
  )
}

export default Home