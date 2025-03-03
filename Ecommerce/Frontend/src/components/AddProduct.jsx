import axios from 'axios';
import React, { useState, useEffect } from 'react'

function AddProduct({isOpen, setIsOpen}) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
 
async function AddItem(e){
    e.preventDefault();

  const product = {
    image: image,
    name: name,
    price:price,
    category:category
  }
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products/addProduct`, product, {
  headers: {
    "Authorization" : `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  }
})


setImage('')
setName('')
setCategory('')
setPrice('')

setIsOpen(false)
  }
  
  return (
    <div>
    
      <form onSubmit={(e)=>{
        AddItem(e)
        
      }}>
      <div className=' fixed inset-0  grid grid-rows-5 grid-flow-row  h-[90%] w-[90%] m-5 bg-[#BDB395] p-5 '>
      <i onClick={()=>setIsOpen(false)} className=" h-10 w-10 ri-close-circle-line text-xl"></i>
            <h2 className='font-sans font-semibold text-2xl flex justify-center'>Add Products</h2>
          <input className="flex justify-center  w-[70vw] h-[65px] p-5  rounded-md border mx-auto border-black" placeholder='Enter Image' value={image} onChange={(e)=>{setImage(e.target.value)}} />
          <input className=" flex justify-center h-[65px] w-[70vw] p-5 border  mx-auto rounded-md border-black" placeholder='Enter product name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input className="text flex justify-center h-[65px]  w-[70vw] p-5 border  mx-auto rounded-md border-black" placeholder='Enter product price' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
          <input className="text flex justify-center h-[65px]  w-[70vw] p-5 border rounded-md border-black  mx-auto" placeholder='Enter product catogery' value={category} onChange={(e)=>{setCategory(e.target.value)}} />
          <button className='border mx-auto border-black h-[45px]  w-[60vw] bottom-0 mt-8 '>Submit</button>
      </div>
      </form>
    
    </div>
  )
}

export default AddProduct
