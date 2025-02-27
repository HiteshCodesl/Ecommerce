
import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginUser from './pages/loginUser'
import SignupUser from './pages/SignupUser'
import Home from './pages/Home'

function App() {
return (
<div>

<Routes>
<Route path='/login' element={<LoginUser />} />
<Route path='/signup' element={<SignupUser />} />
<Route path='/home' element={<Home />} />
</Routes>

</div>
  )
}

export default App
