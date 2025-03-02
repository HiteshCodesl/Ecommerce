import React from 'react'
import { Link } from 'react-router-dom'
function Account() {
  return (
    <div className=' m-14 grid grid-cols-2 grid-flow-row gap-4'>
        <button className='w-[130px] border border-black p-4'>Your Account</button>
        <button className='w-[130px] border border-black p-4'>Orders</button>
        <Link to={"/cart"} className='w-[130px] border border-black p-4 flex justify-center'>Cart</Link>
        <Link to={"/home"} className=' justify-center flex w-[150px] border border-black p-4'>Home</Link>
      </div>
   
  )
}

export default Account
