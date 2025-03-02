import { createContext, useState } from "react";

const cartContext = createContext();

export default function CartProvider({children}){


return(
<div>

<cartContext.Provider>
    {children}
</cartContext.Provider>

</div>

)

}