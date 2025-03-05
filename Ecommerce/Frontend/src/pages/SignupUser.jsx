import 'remixicon/fonts/remixicon.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserDataContext } from '../context/userContext';
import axios from "axios"

function SignupUser() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  async function submitHandler(e){
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email
    }
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

  if(response.status === 200){
    const data = response.data;
    setUser(data.user);
    localStorage.setItem("token", data.token)
    navigate("/home")
  }
  setEmail("")
  setPassword("")
  setUsername("")

  }
  return (
    <div className='h-screen w-100vw overflow-hidden bg-white'>
        
<div className='flex gap-8 my-2'>
<div><i className="ri-shopping-cart-line text-black text-2xl font-semibold  m-3 p-3"> Shopify</i></div>
</div>

<div className='flex flex-col gap-6 relative top-20 h-full '>
<div className='text-xl font-mono ml-6 font-medium '>Signup</div>

<form onSubmit={(e)=>{
submitHandler(e)
}}>
  <div className='flex flex-col gap-4'>
<input type="text" placeholder='Enter your Email' className='w-[82vw] border-black  border-[0.5px] bg-slate-300 text-black flex justify-center mx-auto h-12 p-5 text-lg font-sans font-base' value={email} onChange={(e)=>{ setEmail(e.target.value)}} />

<div className='flex gap-3 mx-auto max-w-[90vw] overflow-hidden '>
<input type="text" placeholder='Enter your Username' className=' border-black w-[40vw] border-[0.5px] p-2 bg-slate-300 text-black flex-1 justify-center mx-auto h-12  text-lg font-sans font-base' value={username} onChange={(e) =>{
  setUsername(e.target.value)}} />

<input type="text" placeholder='Enter your Password' className=' bg-slate-300 w-[40vw] border-black border-[0.5px] text-black flex-1 justify-center mx-auto h-12 p-2 text-lg font-sans font-base' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
</div>

<button className='w-[50vw] border-black   border-[0.5px] text-black flex justify-center mx-auto h-12 py-2 text-lg font-sans  bg-slate-300 font-medium'>Signup</button>
</div>
</form>

<div className='font-medium text-base gap-2 flex justify-end m-3'>Already User? <Link to={"/login"} className='underline underline-offset-4 text-blue-900'>Login</Link></div>

<Link to={'/admin-signup'} className=' flex justify-center w-[70vw] mx-auto px-7 text-white bg-black text-nowrap py-3 mt-9'>Log in as Captain</Link>

</div>
</div>

  )
}

export default SignupUser
