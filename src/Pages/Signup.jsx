import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
const [userdata, setuserdata] = useState({
    name:"",
    email:"",
    password:"",
})

const [file, setfile] = useState(null)
const navigate = useNavigate()

const Onchange = (e) =>[
    setuserdata({...userdata , [e.target.name]:e.target.value}),
    console.log(userdata)
]

const handleOnSubmit = (e) =>{
    e.preventDefault();
    // console.log(userdata , file.name)
    let user = JSON.stringify(userdata)
    localStorage.setItem("userdata" , user)
    navigate("/")
}


const handlefilechange = (e) =>{
const file = e.target.files[0]
if(file){
    setfile(file)
    console.log("selected file" , file.name)
}
}




  return (
    <div className='h-screen w-full bg-slate-500 relative '>
        <div onClick={()=>{navigate("/")}} className="flex absolute top-4 left-3 items-center justify-center text-white">
        <i className="ri-arrow-left-wide-line text-3xl" ></i>
        <h4>Back</h4>
        </div>
        <img className='h-screen w-full' src="https://i.pinimg.com/736x/68/83/f2/6883f23c7d1b5cddbb9e86204e78f00b.jpg" alt="" />
        <div className="sign-up absolute h-[63vh] w-full bg-slate-100  z-[100] bottom-0 rounded-t-[35px]">
            <h1 className='text-3xl text-blue-500 font-semibold text-center mt-4'>Get Started</h1>
            <form onSubmit={handleOnSubmit} action="" className='px-4'>
                <div className="frm flex items-start justify-start flex-col gap-[5px] mb-5">
                    <h4 className='text-[13px] mx-1'>Name</h4>
                    <input   value={userdata.name} onChange={Onchange} name='name' className='w-full p-2 outline-none border-[1.5px] border-gray-600 rounded-[10px] placeholder:text-[14px]' type="text" placeholder='Enter Your Name' />
                </div>

                <div className="frm flex items-start justify-start flex-col gap-[5px] mb-5">
                    <h4 className='text-[13px] mx-1'>Email</h4>
                    <input value={userdata.email} onChange={Onchange} name='email' className='w-full p-2 outline-none border-[1.5px] border-gray-600 rounded-[10px] placeholder:text-[14px]' type="email" placeholder='Enter Your Email' />
                </div>

                <div className="frm flex items-start justify-start flex-col gap-[5px] mb-5">
                    <h4 className='text-[13px] mx-1'>Photo</h4>
                    <input disabled onChange={handlefilechange} className='w-full p-2 outline-none border-[1.5px] border-gray-600 rounded-[10px] placeholder:text-[14px]' type="file" accept="image/*" placeholder='' />

                </div>


                <div className="frm flex items-start justify-start flex-col gap-[5px] mb-5">
                    <h4 className='text-[13px] mx-1'>Passowrd</h4>
                    <input value={userdata.password} onChange={Onchange} name='password' className='w-full p-2 outline-none border-[1.5px] border-gray-600 rounded-[10px] placeholder:text-[14px]' type="number" placeholder='Enter Your Password' />
                </div>

                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-[10px]'>Sign up</button>

            </form>
        </div>
        
    </div>
  )
}

export default Signup