import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/userContext.jsx'
import AdminContext from './context/AdminContext.jsx'
import { ProductProvider } from './context/productContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContext>
      <UserContext>
      <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </ProductProvider>
      </UserContext>
    </AdminContext>
  </StrictMode>
)
