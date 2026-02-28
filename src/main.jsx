import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishlistProvider } from './context/WishlistContext'  // 👈 add this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>   {/* 👈 wrap App */}
      <App />
    </WishlistProvider>
  </React.StrictMode>
)