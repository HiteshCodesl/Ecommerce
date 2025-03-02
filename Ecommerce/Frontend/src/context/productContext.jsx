import {createContext, useState} from "react"

export const ProductContext = createContext();

export function ProductProvider({children}){

const [products, setProducts] = useState([
  
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
      ])

    return(

    <ProductContext.Provider value={{products, setProducts}}>
        {children}
    </ProductContext.Provider>

    )
}