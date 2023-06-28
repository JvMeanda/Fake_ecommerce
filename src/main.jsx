import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SideBarProvider from './components/SideBar/SideBarContext.jsx'
import CartProvider from './components/Cart/CartContext.jsx'
import ProductProvider from './components/Product/ProductContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
)
