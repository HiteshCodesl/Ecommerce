import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { FetchedProductsContext } from "../context/productContext"
import AddToCart from "../components/products"

function Home() {
  const [isopen, setIsOpen] = useState(false)
  const {fetchProducts} = useContext(FetchedProductsContext)
const navigate = useNavigate();

 function logoutUser(){
     localStorage.removeItem("token")
     navigate("/")
  }

  return (
   <div>

   <div><i className=" ri-shopping-cart-line text-black text-2xl font-medium"> Shopify</i></div>

        <Link to={"/account"}><i  className="ri-account-circle-line absolute top-1 right-20 text-3xl p-1 justify-end "></i></Link>

       <button onClick={logoutUser} className='absolute top-2 right-2 border p-1 border-black justify-end '>Logout</button>
     
     <AddToCart popupMsg="successfully added to cart" buttonText="Close"/>
     </div>
  )
}

export default Home
