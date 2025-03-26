import React from 'react'

const Smartdata = () => {
  return (
    <div className='py-2 px-4'>
        <div className="conatiner flex w-full gap-3 overflow-y-auto">
            <div className="smt bg-[#A88DFE] h-[120px] w-[140px] rounded-xl relative">
                <h1 className='text-white p-2 text-xl'>Password</h1>
                <i className="ri-lock-password-fill text-[#020202] opacity-80  text-5xl absolute right-3 bottom-3"></i>
            </div>

            <div className="smt bg-[#FDA94D] h-[120px] w-[140px] rounded-xl relative">
                <h1 className='text-white p-2 text-xl '>Album</h1>
                <i className="ri-disc-fill text-[#020202] opacity-80  text-5xl absolute right-3 bottom-3"></i>
            </div>

            <div className="smt bg-[#FF7F6D] h-[120px] w-[140px] rounded-xl relative">
                <h1 className='text-white p-2 text-xl'>Chats</h1>
                <i className="ri-chat-1-fill text-[#020202] opacity-80  text-5xl absolute right-3 bottom-3"></i>
            </div>
        </div>
    </div>
  )
}

export default Smartdata
