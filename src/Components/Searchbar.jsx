import React from 'react'

const Searchbar = () => {
  return (
    <div className='py-2 px-4'>
        <div className="search w-full bg-[#F3F6FD] h-10 flex items-center rounded-full relative">
            <input className='w-full h-full px-3 outline-none placeholder:text-[15px] font-serif mx-2' type="search" placeholder='Search All' />
            <i className="ri-search-line absolute right-4 text-2xl"></i>
        </div>
    </div>
  )
}

export default Searchbar