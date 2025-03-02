import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
  return (
   <>
       <Link to={"/home"} className=" fixed font-semibold text-lg rounded-xl p-1 m-2 border border-black"><i className ="ri-arrow-go-back-line"></i></Link>

       <div className='mt-30 h-full w-full'>
       <div><i className=" font-thin flex items-center justify-center  text-9xl ri-verified-badge-line text-green-700"></i></div>

       <div className='text-3xl flex justify-center mt-10 '>Payment Successful</div>

       <Link className='border border-black flex justify-center items-center w-[50%] mx-auto  mt-10 h-[50px] font-sans text-lg bg-[#FFEB00]' to={"/home"}>Back to Home</Link>
    
       </div> 
       </>
  )
}

export default Payment
