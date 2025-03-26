import React from 'react'
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";

const Menubar = () => {
  return (
    <div className='fixed bottom-[0] '>
      <menu className='flex px-4 bg-gray-50 py-2 w-full gap-[32px] items-center justify-between'>
        <Link to={`/`} className="mn flex items-center justify-center flex-col ">
        <i className="ri-home-5-line text-2xl"></i>
        <h4 className='text-[12px]'>Home</h4>
        </Link>
       

        <Link to={`/photos`} className="mn flex items-center justify-center flex-col ">
        <i className="ri-multi-image-line text-2xl"></i>
        <h4 className='text-[12px]'>Photos</h4>
        </Link>
        <Link to={`/create`} className="mn flex items-center justify-center flex-col ">
        <i className="ri-add-line text-3xl bg-blue-500 h-10 w-[60px] text-gray-200 flex items-center justify-center rounded-full"></i>
        <h4 className='text-[13px] font-["pp mori"] mt-2 font-semibold' >Add</h4>
        </Link>

        <div className="mn flex items-center justify-center flex-col ">
        <i class="ri-accessibility-line text-2xl"></i>
        <h4 className='text-[12px]'>Changes</h4>
        </div>


        <Link to={`/Signup`} className="mn flex items-center justify-center flex-col ">
        <i class="ri-account-circle-2-line text-2xl"></i>
        <h4 className='text-[12px]'>Me</h4>
        </Link>
      </menu>
    </div>
  )
}

export default Menubar