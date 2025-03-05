import {createContext, useState, useEffect} from "react"
import axios  from "axios";

export const FetchedProductsContext = createContext();

function ProductProvider({children}){
  const [fetchProducts, setFetchProducts] = useState([]);

  async function Getproducts() {

  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/viewProducts`) 

  setFetchProducts(response.data)
  }
  
  useEffect(() => {
    Getproducts();
  }, []);
  
    return(
    <FetchedProductsContext.Provider value={{fetchProducts, setFetchProducts}}>
        {children}
    </FetchedProductsContext.Provider>

    )
}
export default ProductProvider;