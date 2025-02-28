import {createContext, useState } from "react"

export const AdminDataContext = createContext();

function AdminContext({children}){
    const [admin, setAdmin] = useState({
        username: "",
        email: "",
        password: ""
    })

return (
    <div>
        <AdminDataContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminDataContext.Provider>
    </div>
)
}

export default AdminContext;