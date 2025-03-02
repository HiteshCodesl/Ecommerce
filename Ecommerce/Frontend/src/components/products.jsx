import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {ProductContext} from "../context/productContext"

export default function ProductList({popupMsg, buttonText}){
    const [isOpen, setIsOpen] = useState(false);
    const { products } = useContext(ProductContext) || { products: [] }; // Prevents undefined errors

    useEffect(()=>{
      if(isOpen){
          document.body.style.overflow = "hidden"
      }else{
          document.body.style.overflow = "auto"
      }
      },[isOpen])
  
    async function addToCart(product) {
 
      try{
    await axios.post(`${import.meta.env.VITE_BASE_URL || "http://localhost:5000"}/cart/addcart`, {
      productId : product.productId,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image
     },{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    
     }
    )
   
  }catch (error) {
    console.error("Axios error:", error);
  }
    }

    function handleClick(){
        setIsOpen(true);
    }

    return(
        <div className="grid grid-cols-2 grid-flow-row gap-4 h-auto w-auto px-6 mx-auto ">
        

        {products.map((product)=>(
       <div key={product.productId} className="p-4 flex flex-col items-center text-center">
        <img className="w-[100%] h-[100%] object-cover" src={product.image} alt={product.name} />
        <div>{product.name}</div>
        <p className="font-semibold text-xl">{product.price}</p>
        <div className="text-lg font-medium">{product.category}</div>
        <button onClick={()=>{
          handleClick();
           addToCart(product);
        }}
         className="border-black border w-[100%] h-[60px]  text-black text-md font-medium px-4 py-2 mt-2 rounded-lg">Add to Cart</button>
       </div>
        ))}

       {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40  ">
        <div className="bg-[#FBFBFB] border border-black  p-6 rounded-lg  w-[300px] items-center ">
            <h2 className="text-lg font-semibold justify-center flex ">{popupMsg}</h2>
            <button className=" text-white font-mono text-lg bg-black flex justify-center text-center w-full h-10 items-center mt-3" onClick={()=>{setIsOpen(false)}}>{buttonText}</button>
        </div>
        </div>
    )}

        </div>

    )
}