import { useEffect, useState } from 'react'
import { FetchedProductsContext } from '../context/productContext'
import { useContext } from 'react'
import AddProduct from '../components/AddProduct'



function AdminHome() {
const {fetchProducts} = useContext(FetchedProductsContext)
const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

    <div className='flex gap-6 m-5'>
     <button onClick={()=>{
      setIsOpen(true)
      }} className='flex justify-center border border-black p-2 w-full font-mono text-md text-md rounded-md'>Add</button>
     <button className='flex justify-center border border-black p-2 w-full font-mono text-md text-md rounded-md'>Update</button>
     <button className='flex justify-center border border-black p-2 w-full font-mono text-md text-md rounded-md'>Delete</button>
    </div>
    <div>

<div className="grid grid-cols-2 grid-flow-row gap-4 h-auto w-auto px-6 mx-auto">

{fetchProducts.map((product)=>(
<div key={product.productId} className="p-4 flex flex-col items-center text-center">
<img className="w-[100%] h-[100%] object-cover" src={product.image} alt={product.name} />
<div>{product.name}</div>
<p className="font-semibold text-xl">{`₹${product.price}`}</p>
<div className="text-lg font-medium">{product.category}</div>
</div>
))}


{isOpen && <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} /> }


</div>

    </div>
   
    </div>
     
  )
}
export default AdminHome
