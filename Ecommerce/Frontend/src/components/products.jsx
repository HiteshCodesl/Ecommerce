import axios from "axios";
import { useEffect, useState } from "react";


export default function ProductList({popupMsg, buttonText}){
    const [isOpen, setIsOpen] = useState(false);

  
const products = [
  {
    productId: 1,
    name: "Macbook M4",
    price: "₹399999",
    category: "Electronics",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507",
  },
  {
    productId: 2,
    name: "iPhone 16 Pro Max",
    price: "₹199999",
    category: "Electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuYN2vuHTy4ieCIQxoMtexs_QIzRAsCAfrA&s",
  },
  {
    productId: 3,
    name: "Apple Mac Mini",
    price: "₹199999",
    category: "Electronics",
    image:
      "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.news_app_ed.jpg",
  },
  {
    productId: 4,
    name: "iPad Pro",
    price: "₹99999",
    category: "Electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXSiZS0Qa0FyiftlKyRQneCf-DTsw56JJIA&s",
  },
  {
    productId: 5,
    name: "Apple Headsets Pro",
    price: "₹49999",
    category: "Electronics",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kigbjbk0-0/headphone/p/p/i/mgyh3hn-a-apple-original-imafy8wbdnh4kbkd.jpeg?q=90&crop=false",
  },
  {
    productId: 6,
    name: "Apple Vision Pro",
    price: "₹199999",
    category: "Electronics",
    image:
      "https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/portrait_base_us__fucaqiry5e2q_large.jpg",
  },
];

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