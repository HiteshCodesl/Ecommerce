
import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginUser from './pages/loginUser'
import SignupUser from './pages/SignupUser'
import Home from './pages/Home'
import AdminSignup from './pages/AdminSignup'
import AdminLogin from "./pages/AdminLogin"
import AdminHome from './pages/AdminHome'
import Start from './pages/Start'
import Account from './components/Account'
import Cart from './components/cart'
import Payment from './components/Payment'

function App() {
return (
<div>


<Routes>
<Route path='/' element={<Start />} />
<Route path='/login' element={<LoginUser />} />
<Route path='/signup' element={<SignupUser />} />
<Route path='/home' element={<Home />} />
<Route path='/admin-signup' element={<AdminSignup />}/>
<Route path='/admin-login' element={<AdminLogin />} />
<Route path='/admin-home' element={<AdminHome />} />
<Route path='/account' element={<Account />} />
<Route path="/cart" element={<Cart />} />
<Route path='/payment' element={<Payment />} />
</Routes>


</div>
  )
}

export default App
