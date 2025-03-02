import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Products from "../components/products";

function Start() {
  
  return (
    <div className="">

    <div className=" max-w-full m-7 flex justify-end z-0">
    <button className=" flex items-center justify-center text w-[100px] h-10 rounded-md text-md font-sans  text-black border border-black  top-0"> <Link to={"/login"}>Login</Link></button>
    </div>

    <div className="h-screen w-screen flex flex-col bg-white">
        <div className="mx-auto justify-center relative  items-top">
        <h1 className="tracking-widest  text-2xl font-medium font-mono ">Shopify</h1>
        <p className=" tracking-wider mt-4 ml-2 text-lg font-bold">WELCOME</p>
        <p className="text-sm font-thin ml-2">Log in to Shopify</p>
       </div>
      
       <Products popupMsg="Please Log in to add" buttonText="Close" />
    </div>
    </div>
  )
}

export default Start
