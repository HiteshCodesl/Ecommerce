import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [isopen, setIsOpen] = useState(false)
  
const navigate = useNavigate();

 function logoutUser(){
     localStorage.removeItem("token")
     navigate("/")
  }

  return (
    <div>

       <div><i className=" ri-shopping-cart-line text-black text-2xl font-medium"> Shopify</i></div>
       <button onClick={logoutUser} className='absolute top-2 right-2 border p-1 border-black justify-end '>Logout</button>
     
       <div className='grid grid-cols-2 grid-flow-row gap-4 h-auto w-auto px-6 mx-auto on '>

        <div className='p-4 flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%] object-cover" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916322507" alt="" />
          <div className="">Macbook m4</div>
          <p className='font-semibold text-xl'>₹399999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-wrap'>Add to Cart</button>
        </div>
     

     
        <div className='p-4  flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%]  object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuYN2vuHTy4ieCIQxoMtexs_QIzRAsCAfrA&s" alt="" />
          <div className="mt-2 text-nowrap">Iphone 16 pro max</div>
          <p className='font-semibold text-xl'>₹199999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-nowrap'>Add to Cart</button>
        </div>
     

   
        <div className='p-4 flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%] object-cover" src="https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.news_app_ed.jpg" alt="" />
          <div className="text-nowrap">Apple mac mini</div>
          <p className='font-semibold text-xl'>₹199999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-nowrap'>Add to Cart</button>
        </div>


     
        <div className='p-4 flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXSiZS0Qa0FyiftlKyRQneCf-DTsw56JJIA&s" alt="" />
          <div className="">Ipad pro</div>
          <p className='font-semibold text-xl'>₹99999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-nowrap'>Add to Cart</button>
        </div>


  
        <div className='p-4 flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%] object-cover" src="https://rukminim2.flixcart.com/image/850/1000/kigbjbk0-0/headphone/p/p/i/mgyh3hn-a-apple-original-imafy8wbdnh4kbkd.jpeg?q=90&crop=false" alt="" />
          <div className="">Apple Headsets pro</div>
          <p className='font-semibold text-xl'>₹49999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-nowrap'>Add to Cart</button>
        </div>
      

  
        <div className='p-4 flex flex-col items-center text-center'>
          <img className="w[100%] h-[100%] object-cover" src="https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/portrait_base_us__fucaqiry5e2q_large.jpg" alt="" />
          <div className="">Apple Vision pro</div>
          <p className='font-semibold text-xl'>₹199999</p>
          <div className='text-lg font-medium'>Electronics</div>
          <button className='bg-black w-[100%] h-[50px] text-white px-4 py-2 mt-2 rounded-lg text-nowrap'>Add to Cart</button>
        </div>
     


       </div>
    </div>
  )
}

export default Home
