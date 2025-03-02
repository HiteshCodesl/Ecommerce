import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchCartItems() {
            try {
               
                  const response =  await axios.get(`${import.meta.env.VITE_BASE_URL}/cart/getcart`, {

                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem("token")}`,
                            "Content-Type": "application/json"
                        }
                    })
                    setCart(response.data)
              
                
            } catch(err){
                console.error("Error fetching cart items:", err);
            }
   }
   fetchCartItems();
    },[])


  return (
    <>
    <Link to={"/home"} className=" fixed font-semibold text-lg rounded-xl p-1 m-2 border border-black"><i className ="ri-arrow-go-back-line"></i></Link>
    <Link to={"/payment"} className="fixed flex mx-10 w-[80%] bottom-6 bg-[#F3C623] h-[50px] items-center  text-black justify-center text-xl border border-black font-semibold font-mono">Proceed to Buy</Link>
        <div className="grid grid-cols-2 grid-flow-row gap-4 h-auto w-auto px-6 mx-auto mb-20 ">
            {cart.map((product, index) => (
                <div key={`${product.productId}-${index}`} className="p-4 flex flex-col items-center text-center">
                    <img className="w-[100%] h-[100%] object-cover" src={product.image} alt={product.name} />
                    <div>{product.name}</div>
                    <p className="font-semibold text-xl">{product.price}</p>
                    <div className="text-lg font-medium">{product.category}</div>

                </div>
            ))}

        </div>
        </>
    )
}

export default Cart
