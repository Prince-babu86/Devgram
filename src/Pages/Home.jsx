import React from 'react'
import Menubar from "../Components/Menubar"
import Navbar from '../Components/Navbar'
import Searchbar from '../Components/Searchbar'
import Path from '../Components/Path'
import Smartdata from '../Components/Smartdata'
import Banner from '../Components/Banner'
import Shortcut from '../Components/Shortcut'


const Home = () => {
 
  
  return (
    <div>
      <div className='overflow-y-auto h-[88vh] '>
      <Navbar/>
      <Searchbar/>
      <Path/>
      <Smartdata/>
      <Banner/>
      <Shortcut/>
      </div>
     
    </div>
  )
}

export default Home