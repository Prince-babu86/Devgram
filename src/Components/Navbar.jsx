import React from 'react'

const Navbar = () => {
  return (
    <div className='py-2 px-4'>
        <nav className='flex items-center justify-between'>
            <div className="leftnav flex items-center justify-center gap-3" >
            <i className="ri-archive-stack-fill text-4xl"></i>
            <h1 className='text-2xl uppercase'>My Cloud</h1>
            </div>
            <div className="rightnav">
            <i className="ri-menu-4-line text-3xl"></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar