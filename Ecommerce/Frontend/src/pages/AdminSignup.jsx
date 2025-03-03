import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AdminDataContext } from '../context/AdminContext'
import axios from "axios";

function AdminSignup() {
    const [email, setEmail ] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const {admin, setAdmin} = useContext(AdminDataContext)

    async function submitHandler(e){
      e.preventDefault();
      const newAdmin = {
        email: email,
        username: username,
        password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admins/register`, newAdmin)

    if(response.status === 200){
        const data = response.data;
        setAdmin(data.admin) 
        localStorage.setItem("token", data.token)
        navigate("/admin-home")
    }
setEmail("")
setPassword("")
setUsername("")
}
  return (
    <div className='h-screen w-100vw overflow-hidden bg-white'>
        
<div className='flex gap-8 my-2'>
<div><i className="ri-admin-line text-black text-2xl font-semibold  m-3 p-3"> Shopify</i></div>
</div>

<div className='flex flex-col gap-6 relative top-20 h-full '>
<div className='text-xl font-mono ml-6 font-medium '>Signup</div>

<form onSubmit={(e)=>{
  submitHandler(e);
}}>
  <div className='flex flex-col gap-4'>
<input type="text" placeholder='Enter your Email' className='w-[82vw] border-black  border-[0.5px] bg-slate-300 text-black flex justify-center mx-auto h-12 p-5 text-lg font-sans font-base' value={email} onChange={(e)=>{ setEmail(e.target.value)}} />

<div className='flex gap-3 mx-auto max-w-[90vw] overflow-hidden '>
<input type="text" placeholder='Enter your Username' className=' border-black w-[40vw] border-[0.5px] p-2 bg-slate-300 text-black flex-1 justify-center mx-auto h-12  text-lg font-sans font-base' value={username} onChange={(e) =>{
  setUsername(e.target.value)}} />

<input type="password" placeholder='Enter your Password' className=' bg-slate-300 w-[40vw] border-black border-[0.5px] text-black flex-1 justify-center mx-auto h-12 p-2 text-lg font-sans font-base' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
</div>

<button className='w-[50vw] border-black   border-[0.5px] text-black flex justify-center mx-auto h-12 py-2 text-lg font-sans  bg-slate-300 font-medium'>Signup</button>
</div>

</form>
<div className='font-medium text-base gap-2 flex justify-end m-3'>Already Admin? <Link to={'/admin-login'} className='underline underline-offset-4 text-blue-900'>Login</Link></div>
</div>

</div>
  )
}

export default AdminSignup
