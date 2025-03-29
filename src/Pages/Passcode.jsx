import React, { useEffect, useRef, useState } from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

const Passcode = () => {
    const [pascode, setpascode] = useState({
        pascode:"",
        rePascode:""
    })

    const [loader, setloader] = useState(false)
    const [isMatched, setisMatched] = useState(false)
    const navigate = useNavigate()

    const userdata = JSON.parse(localStorage.getItem("userdata"))
   
    const isMatchRef = useRef()

    useEffect(()=>{
        if(!isMatched){
            isMatchRef.current.style.display = "none"
        }else{
         isMatchRef.current.style.display = "flex"
        }
    },[isMatched])

    const handleOnChnage = (e) =>{
        const {name , value} = e.target
        setpascode({...pascode , [name]:value})
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
       
        setloader(true)
        setTimeout(() => {
            if(pascode.pascode === userdata.password && pascode.rePascode === userdata.password){
                console.log("matched")
                setisMatched(true)
                setpascode({
                    pascode:"",
                    rePascode:""
                })
                setTimeout(() => {
                    navigate("/Passwords")
                }, 2000);
            }else{
                console.log("not matched")
                 setTimeout(() => {
                     isMatchRef.current.style.display = "flex"
                     setTimeout(() => {
                        isMatchRef.current.style.display = "none"
                    }, 2000);
                 }, 1000);

               
                setpascode({
                    pascode:"",
                    rePascode:""
                })
            }
            setloader(false)
        }, 2000);
    }

  return (
   <>
 <div ref={isMatchRef} > 
 {isMatched ? ( <div className='text-lg text-center  w-full bg-green-700 p-4 text-white'>Your Passcode is Matched</div>):( <div className='text-lg text-center w-full bg-red-700  p-4 text-white'>Your Passcode is Not Matched</div>)}
 </div>
 
   
   {userdata ? ( <div className='h-screen w-screen px-4 py-2'>
        <h1 className='text-2xl text-center mt-4 font-semibold'>Get Passwords</h1>
        <form onSubmit={handleOnSubmit} action="" className='flex items-center  flex-col gap-5 mt-10'>
            <input required onChange={handleOnChnage} value={pascode.pascode}  maxLength={6} minLength={4}   name='pascode' className='w-full outline-none  p-4 rounded-xl border-[1.5px] border-gray-500' type="password" inputMode='numeric' pattern='[0-9]*' placeholder='Enter Passcode' />
            <input required onChange={handleOnChnage} value={pascode.rePascode} maxLength={6} minLength={4} name='rePascode' className='w-full outline-none  p-4 rounded-xl border-[1.5px] border-gray-500' type="password" inputMode='numeric' pattern='[0-9]*' placeholder='Re-enter Passcode' />
            <button type="submit" className="text-lg bg-[#FFCB47] w-full py-3 rounded-xl mt-2">{loader ? (<div className="flex justify-center gap-2 items-center">
            <div className="h-6 w-6 animate-spin inline-block border-t-transparent rounded-full border-gray-700 border-[3px]"></div>Checking
          </div>):("Check")}
           
          </button>
        </form>
    </div>):(<Signup/>)}
   </>
  )
}

export default Passcode