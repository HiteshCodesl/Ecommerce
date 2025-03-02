import React, { useContext, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { AdminDataContext } from '../context/AdminContext';
import axios from 'axios';

 function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {admin, setAdmin} = useContext(AdminDataContext)

  async function submitHandler(e) {
    e.preventDefault();

    const newData = {
       email: email,
       password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admins/login`, newData)

    if(response.status === 200){
      const data  = response.data;
      setAdmin(data.admin);
      localStorage.setItem("token", data.token)
      navigate("/home")
    }

  setEmail("");
  setPassword("");
}
  return (
    <div>
      <div className='h-screen w-100vw overflow-hidden bg-white'>

<div className='flex gap-8 my-2'>
  <div><i className="ri-admin-line font-semibold text-black text-2xl m-3 p-3"> Shopify</i></div>
</div>

<div className='flex flex-col gap-4 relative top-20 h-full '>
<div className='text-xl font-mono ml-6 font-medium '>Login</div>

  <form onSubmit={(e)=>{
    submitHandler(e)
  }}>

    <div className='flex flex-col gap-4'>
  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter your Email' className='w-[90vw] border-black  border-[0.5px] bg-slate-300 text-black flex justify-center mx-auto h-12 p-5 text-lg font-sans ' />

  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter your Password' className='w-[90vw] bg-slate-300 border-black border-[0.5px] text-black flex justify-center mx-auto h-12 p-5 text-lg font-sans' />

  <button className='w-[50vw] border-black   border-[0.5px] text-black flex justify-center mx-auto h-12 py-2 text-lg font-sans  bg-slate-300 font-base'>Login</button>
  </div>
  </form>

  <div className='font-medium gap-1 text-base flex justify-end m-3'>New User?<Link to={"/admin-signup"} className='underline underline-offset-4 text-blue-900'>Signup</Link></div>

</div>

</div>
</div>
  )
}

export default AdminLogin
